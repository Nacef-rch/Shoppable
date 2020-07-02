import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';

import { ProductFacade } from '@product/+store/product.facade';
import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-get-products',
    templateUrl: './get-products.component.html',
    styleUrls: ['./get-products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetProductsComponent implements OnInit {
    private readonly notifier: NotifierService;
    @Output() pressedProduct = new EventEmitter<any>();
    displayedColumns: string[] = [
        'select',
        'Product',
        'Category',
        'UserHandle',
        'Available',
        'Incoming',
        'Edit'
    ];
    dataSource: MatTableDataSource<StoreProducts>;
    data: StoreProducts[];
    public Products$: Observable<StoreProducts[]> = this.ProductFacade.storeProducts$;
    public success$: Observable<string> = this.ProductFacade.success$;
    public error$: Observable<string> = this.ProductFacade.error$;

    selection = new SelectionModel<StoreProducts>(true, []);
    constructor(private ProductFacade: ProductFacade, public notifierService: NotifierService) {
        this.notifier = notifierService;
    }
    ngOnInit(): void {
        this.Products$.subscribe((resData) => {
            console.log(resData);

            this.dataSource = new MatTableDataSource<StoreProducts>(resData);
            this.data = Object.assign(resData);
        });
    }
    public isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    public passClick(row): void {
        this.pressedProduct.emit(row);
    }
    public changeStock(productId, StockNum): void {
        this.data.forEach((element) => {
            if (element.productId == productId) {
                element.quantityInStock = StockNum;
            }
        });
        this.success$.subscribe((res) => {
            if (res) {
                this.notifier.notify('success', res);
            }
        });
        this.error$.subscribe((res) => {
            if (res) {
                this.notifier.notify('error', res);
            }
        });
        this.dataSource = new MatTableDataSource<StoreProducts>(this.data);
        this.ProductFacade.productStock(productId, StockNum);
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    public masterToggle(): void {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((row) => this.selection.select(row));
    }
    public removeSelectedRows(): void {
        // this.selection.selected.forEach((item, i) => {
        //     const index: number = this.data.findIndex((d) => d === item);
        //     console.log(this.data.findIndex((d) => d === item));
        //     this.data.splice(index, 1);
        //     this.dataSource = new MatTableDataSource<StoreProducts>(this.data);
        //     setTimeout(() => {
        //         this.ProductFacade.productDelete(item.productId);
        //     }, i * 1000);
        // });
        // this.success$.subscribe((res) => {
        //     if (res) {
        //         console.log(res);
        //         this.notifier.notify('success', res);
        //     }
        // });
        // this.error$.subscribe((res) => {
        //     if (res) {
        //         this.notifier.notify('error', res);
        //     }
        // });
        // this.selection = new SelectionModel<StoreProducts>(true, []);
    }

    /** The label for the checkbox on the passed row */
    public checkboxLabel(row?: StoreProducts): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
