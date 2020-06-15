import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductFacade } from '@product/+store/product.facade';
import { Observable } from 'rxjs';
import { StoreProducts } from '@product/models/product.model';

@Component({
    selector: 'lib-get-products',
    templateUrl: './get-products.component.html',
    styleUrls: ['./get-products.component.scss']
})
export class GetProductsComponent implements OnInit {
    displayedColumns: string[] = ['select', 'Product', 'Category', 'UserHandle', 'Available'];
    dataSource;
    public Products$: Observable<StoreProducts[]> = this.ProductFacade.storeProducts$;
    AllProducts: StoreProducts[];

    selection = new SelectionModel<StoreProducts>(true, []);
    constructor(private ProductFacade: ProductFacade) {}
    ngOnInit(): void {
        this.Products$.subscribe((resData) => {
            this.AllProducts = resData;
            this.dataSource = new MatTableDataSource<StoreProducts>(resData);
        });
        console.log(this.AllProducts);
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach((row) => this.selection.select(row));
    }
    selected() {
        console.log(this.selection.selected);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: StoreProducts): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
