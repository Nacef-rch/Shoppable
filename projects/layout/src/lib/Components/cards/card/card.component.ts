import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { StoreProducts } from '@product/models/product.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'lib-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() productsTab;
    @Output() pageNumber = new EventEmitter<number>();

    test;
    pageStart = 0;
    pageEnd = 6;

    products: StoreProducts[];
    counter = Array;
    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.products = this.productsTab;

        this.test = Math.ceil(this.productsTab.length / 6);
    }

    pageData(i) {
        this.pageNumber.emit(i);
        this.pageStart = 6 * (i - 1);
        this.pageEnd = 6 * i;
    }

    topFunction() {
        document.body.scrollTop = 300; // For Safari
        document.documentElement.scrollTop = 300; // For Chrome, Firefox, IE and Opera
    }
    ngOnChanges(changes: SimpleChanges) {
        this.products = changes.productsTab.currentValue;
        this.test = Math.ceil(this.productsTab.length / 6);
    }
    clickCard(category, product) {
        this.router.navigate([`${category}/${product}`], { relativeTo: this.route });
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}
