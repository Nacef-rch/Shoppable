import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductFacade } from '@product/+store/product.facade';
import { Observable } from 'rxjs';

@Component({
    selector: 'lib-default-header',
    templateUrl: './default-header.component.html',
    styleUrls: ['./default-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultHeaderComponent {
    public productQuantity$: Observable<number> = this.prodFacade.cartQuantity$;
    constructor(private prodFacade: ProductFacade) {}
}
