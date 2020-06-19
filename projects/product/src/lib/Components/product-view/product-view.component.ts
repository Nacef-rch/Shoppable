import { Component, Input } from '@angular/core';
import { PreviewModel } from '@dash/constants/product-preview.constant';

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

    imgUrlFill = PreviewModel.imgUrlFill;
    titreFill = PreviewModel.titreFill;
    descriptionFill = PreviewModel.descriptionFill;
    categoryFill = PreviewModel.categoryFill;
    priceFill = PreviewModel.priceFill;
}
