import { Component, Input } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'lib-instagram',
    templateUrl: './instagram.component.html',
    styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent {
    @Input() productId;
    comment = false;
    like = false;
    constructor(private productFacade: ProductFacade) {}

    onComment() {
        this.comment = !this.comment;
    }
    onLike() {
        this.like = !this.like;
        console.log(this.productId);

        this.productFacade.productLike(this.productId);
    }
}
