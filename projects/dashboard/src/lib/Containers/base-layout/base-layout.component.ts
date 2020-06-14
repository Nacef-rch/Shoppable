import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ThemeOptions } from '../../theme-options';
import { animate, query, style, transition, trigger } from '@angular/animations';

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
export class BaseLayoutComponent {
    constructor(public globals: ThemeOptions) {}

    toggleSidebarMobile() {
        this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
    }
}
