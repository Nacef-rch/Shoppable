import { Component, OnInit } from '@angular/core';
import { CartProducts } from '@product/models/product.model';
import { ProductFacade } from '@product/+store/product.facade';
import { AuthFacade } from '@authentication/+store/auth.facade';
import { Observable } from 'rxjs';
import { User } from '@authentication/models/user.model';

@Component({
    selector: 'lib-default-checkout',
    templateUrl: './default-checkout.component.html',
    styleUrls: ['./default-checkout.component.scss']
})
export class DefaultCheckoutComponent implements OnInit {
    public user$: Observable<User> = this.authFacade.user$;
    public products: CartProducts[];
    public SubTotal = 0;
    public Delivery = 0;
    public DifferentAddress = false;
    public Register = false;

    constructor(private prodFacade: ProductFacade, private authFacade: AuthFacade) {}

    public ngOnInit(): void {
        this.prodFacade.cartProducts$.subscribe((resData) => {
            this.products = resData;
            resData.forEach((item) => {
                this.SubTotal = this.SubTotal + item.unitPrice * item.quantitySelected;
            });
            this.Delivery = 7.99;
        });
    }
    public showDifAddress(): void {
        this.DifferentAddress = !this.DifferentAddress;
    }
    public register(): void {
        this.Register = !this.Register;
    }
}
