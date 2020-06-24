import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductFacade } from '@product/+store/product.facade';

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
