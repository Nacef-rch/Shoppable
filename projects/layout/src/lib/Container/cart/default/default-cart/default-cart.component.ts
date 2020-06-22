import { Component, OnInit } from '@angular/core';
import { CartProducts } from '@product/models/product.model';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-default-cart',
    templateUrl: './default-cart.component.html',
    styleUrls: ['./default-cart.component.scss']
})
export class DefaultCartComponent implements OnInit {
    products: CartProducts[];
    SubTotal = 0;
    Delivery = 0;

    constructor(private prodFacade: ProductFacade) {}

    ngOnInit(): void {
        this.prodFacade.cartProducts$.subscribe((resData) => {
            this.products = resData;
            resData.forEach((item) => {
                this.SubTotal = this.SubTotal + item.unitPrice * item.quantitySelected;
            });
            this.Delivery = 7.99;
        });
    }
    onClickPlus(position: number) {
        this.products.forEach((item) => {
            if (item.position == position) {
                this.SubTotal = this.SubTotal - item.unitPrice * item.quantitySelected;
                item.quantitySelected++;
                this.SubTotal = this.SubTotal + item.unitPrice * item.quantitySelected;
                //this.SubTotal = this.SubTotal + item.unitPrice * item.quantitySelected;
            }
        });
    }
    onClickMinus(position: number) {
        this.products.forEach((item) => {
            if (item.position == position && item.quantitySelected > 1) {
                this.SubTotal = this.SubTotal - item.unitPrice * item.quantitySelected;
                item.quantitySelected--;
                this.SubTotal = this.SubTotal + item.unitPrice * item.quantitySelected;
            }
        });
    }
    deleteProduct(position: number) {
        this.SubTotal = 0;
        this.products = this.products.filter((item) => {
            if (item.position !== position) {
                this.SubTotal = this.SubTotal + item.unitPrice * item.quantitySelected;
                return item;
            }
        });
    }
}
