import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ThemeOptions } from '../../theme-options';
import { animate, query, style, transition, trigger } from '@angular/animations';
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
    ngOnInit() {
        this.prodFacade.fetchCategoryStart();
    }

    toggleSidebarMobile() {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    }
}
