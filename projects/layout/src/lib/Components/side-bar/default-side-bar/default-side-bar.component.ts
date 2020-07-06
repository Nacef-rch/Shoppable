import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreProducts } from '@product/models/product.model';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-default-side-bar',
    templateUrl: './default-side-bar.component.html',
    styleUrls: ['./default-side-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultSideBarComponent implements OnInit {
    public Products$: Observable<StoreProducts[]> = this.productFacade.storeProducts$;
    public products: StoreProducts[];
    public productsArray: StoreProducts[];
    public shopTitle = 'All';
    public sliderMinValue = 0;
    public sliderMaxValue = 100;
    public numPage = 1;
    public categories = [];
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    constructor(private productFacade: ProductFacade) {}

    public ngOnInit(): void {
        this.Products$.subscribe((resData) => {
            this.products = resData;
            this.productsArray = resData;
            console.log(this.products);
            resData.forEach((data) => {
                this.categories.push(data.categoryId);

                this.categories.splice(0, this.categories.length, ...new Set(this.categories));
            });
        });
    }
    public categoryClick(category): any {
        this.shopTitle = category;
        this.products = this.productsArray;
        console.log(category);
        const newArray = this.products.filter(function (el) {
            return el.categoryId == category;
        });
        this.products = newArray;

        this.sliderMinValue = 0;
        this.sliderMaxValue = 100;
    }
    public SliderValue(value: number): any {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        // this.products = this.productsArray;
        // const newArray = this.products.filter(function (el) {
        //     return Math.round(el.unitPrice) <= Math.round(value);
        // });
        // console.log(newArray);
        // this.products = newArray;

        return value;
    }

    public minValueSlider(event): any {
        if (this.sliderMinValue > event.value) {
            this.products = this.productsArray;
            this.sliderMinValue = 0;
        }
        const newArray = this.products.filter(function (el) {
            return Math.round(el.unitPrice) >= Math.round(event.value);
        });
        console.log(newArray);
        this.products = newArray;
        this.sliderMinValue = event.value;
    }
    public maxValueSlider(event): any {
        if (this.sliderMaxValue < event.value) {
            this.products = this.productsArray;
            this.sliderMaxValue = 100;
        }
        const newArray = this.products.filter(function (el) {
            return Math.round(el.unitPrice) <= Math.round(event.value);
        });
        console.log(newArray);
        this.products = newArray;
        this.sliderMaxValue = event.value;
    }
    public categoryAll(): void {
        this.products = this.productsArray;
        this.shopTitle = 'All';
        this.sliderMinValue = 0;
        this.sliderMaxValue = 100;
    }
    public onPageNumber(event): void {
        this.numPage = event;
    }
    public searchFilter(value: string): void {
        const searchText = value.toUpperCase();

        this.products = this.productsArray;

        this.products = this.products.filter((item) => {
            const itemText = item.name.toUpperCase();

            if (itemText.includes(searchText)) {
                return item;
            }
        });
    }
}
