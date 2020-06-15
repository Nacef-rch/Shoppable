import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
    @Input() imgUrl;
    @Input() titre;
    @Input() description;
    @Input() category;
    @Input() price;
    imgUrlFill =
        'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg';
    titreFill = 'Denim lace up';
    descriptionFill =
        'These skate inspired sneakers feature an extra high flatform with a contrast color bottom layer. The upper in a shade of denim matching the bottom out-sole layer, makes this sneaker even more stand out and perfect for warmer days.';
    categoryFill = 'Shoes';
    priceFill = '26.25';
}
