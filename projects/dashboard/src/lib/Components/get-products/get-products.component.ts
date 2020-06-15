import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductFacade } from '@product/+store/product.facade';
import { Observable } from 'rxjs';
import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-get-products',
    templateUrl: './get-products.component.html',
    styleUrls: ['./get-products.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetProductsComponent implements OnInit {
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
    dataSource;
    data;
    public Products$: Observable<StoreProducts[]> = this.ProductFacade.storeProducts$;

    selection = new SelectionModel<StoreProducts>(true, []);
    constructor(private ProductFacade: ProductFacade) {}
    ngOnInit(): void {
        this.Products$.subscribe((resData) => {
            this.dataSource = new MatTableDataSource<StoreProducts>(resData);
            this.data = Object.assign(resData);
        });
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    passClick(row) {
        this.pressedProduct.emit(row);
    }
    changeStock(productId, StockNum) {
        this.data.forEach((element) => {
            if (element.productId == productId) {
                element.quantityInStock = StockNum;
            }
        });
        this.dataSource = new MatTableDataSource<StoreProducts>(this.data);
        this.ProductFacade.productStock(productId, StockNum);
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        this.selection.selected.forEach((item, i) => {
            const index: number = this.data.findIndex((d) => d === item);
            console.log(this.data.findIndex((d) => d === item));
            this.data.splice(index, 1);
            this.dataSource = new MatTableDataSource<StoreProducts>(this.data);
            setTimeout(() => {
                this.ProductFacade.productDelete(item.productId);
            }, i * 1000);
        });
        this.selection = new SelectionModel<StoreProducts>(true, []);
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: StoreProducts): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
