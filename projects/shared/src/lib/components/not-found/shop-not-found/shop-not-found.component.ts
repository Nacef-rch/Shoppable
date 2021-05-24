import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'lib-shop-not-found',
    templateUrl: './shop-not-found.component.html',
    styleUrls: ['./shop-not-found.component.scss']
})
export class ShopNotFoundComponent implements OnInit {
    constructor(private router: Router) {}
    ngOnInit(): void {
        setTimeout(() => {
            this.router.navigate([`home`]);
        }, 3000);
    }
}
