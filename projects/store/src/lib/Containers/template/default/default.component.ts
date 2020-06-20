import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';
import { Observable } from 'rxjs';
import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent implements OnInit {
    public Products$: Observable<StoreProducts[]> = this.productFacade.storeProducts$;
    products: StoreProducts[];
    productsArray: StoreProducts[];
    sliderMinValue = 0;
    sliderMaxValue = 100;
    sliderValueArray: StoreProducts[];
    categories = [];
    public isLoading$: Observable<boolean> = this.productFacade.loading$;
    constructor(private productFacade: ProductFacade) {}

    ngOnInit(): void {
        this.productFacade.fetchStoreStart();

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
    onClick(category) {
        this.products = this.productsArray;
        console.log(category);
        const newArray = this.products.filter(function (el) {
            return el.categoryId == category;
        });
        this.products = newArray;
        console.log(this.products);
    }
    SliderValue(value: number) {
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

    minValueSlider(event) {
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
    maxValueSlider(event) {
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
}
