import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'lib-all-products',
    templateUrl: './all-products.component.html',
    styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
    constructor(private router: Router) {}

    public onClick(): void {
        this.router.navigate(['/products/new']);
    }
}
