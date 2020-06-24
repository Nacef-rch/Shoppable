import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() productsTab;
    @Output() pageNumber = new EventEmitter<number>();
    public test: number;
    public pageStart = 0;
    public pageEnd = 6;
    public products: StoreProducts[];
    public counter = Array;

    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.products = this.productsTab;
        this.test = Math.ceil(this.productsTab.length / 6);
    }

    public pageData(i): void {
        this.pageNumber.emit(i);
        this.pageStart = 6 * (i - 1);
        this.pageEnd = 6 * i;
    }

    public topFunction(): void {
        document.body.scrollTop = 300;
        document.documentElement.scrollTop = 300;
    }
    public ngOnChanges(changes: SimpleChanges): void {
        this.products = changes.productsTab.currentValue;
        this.test = Math.ceil(this.productsTab.length / 6);
    }
    public clickCard(category, product): void {
        this.router.navigate([`${category}/${product}`], { relativeTo: this.route });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
