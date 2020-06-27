import { Component, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

import { ThemeOptions } from '@admin/constants/theme-options';
import { ProductFacade } from '@product/+store/product.facade';

@Component({
    selector: 'app-base-layout',
    templateUrl: './base-layout.component.html',
    animations: [
        trigger('architectUIAnimation', [
            transition('* <=> *', [
                query(':enter, :leave', [
                    style({
                        opacity: 0,
                        display: 'flex',
                        flex: '1',
                        transform: 'translateY(-20px)',
                        flexDirection: 'column'
                    })
                ]),
                query(':enter', [
                    animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
                ]),

                query(
                    ':leave',
                    [animate('600ms ease', style({ opacity: 0, transform: 'translateY(-20px)' }))],
                    { optional: true }
                )
            ])
        ])
    ]
})
export class BaseLayoutComponent implements OnInit {
    constructor(public globals: ThemeOptions, public prodFacade: ProductFacade) {}
    public ngOnInit(): void {
        this.prodFacade.fetchCategoryStart();
    }

    public toggleSidebarMobile(): void {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    }
}
