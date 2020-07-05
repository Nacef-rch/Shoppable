import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'lib-home-stores',
    templateUrl: './home-stores.component.html',
    styleUrls: ['./home-stores.component.scss']
})
export class HomeStoresComponent {
    constructor(private router: Router) {}

    navigateToShop() {
        this.router.navigate(['/Mirra/shop']);
    }
}
