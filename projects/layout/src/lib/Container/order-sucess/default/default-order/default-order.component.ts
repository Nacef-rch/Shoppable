import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '@store/+store/store.facade';

@Component({
    selector: 'lib-default-order',
    templateUrl: './default-order.component.html',
    styleUrls: ['./default-order.component.scss']
})
export class DefaultOrderComponent implements OnInit {
    public linkUrl;
    constructor(private storeFacade: StoreFacade) {}

    ngOnInit(): void {
        this.storeFacade.ActiveStore$.subscribe((resData) => {
            this.linkUrl = `/${resData}/shop`;
        });
    }
}
