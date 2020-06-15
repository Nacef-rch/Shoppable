import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as productActions from '@product/+store/product.actions';
import { productQuery } from '@product/+store/product.selectors';
import { ProductStore } from '@product/+store/product.reducer';
@Injectable({
    providedIn: 'root'
})
export class ProductFacade {
    public success$ = this.store.select(productQuery.getProductSuccess); // <== observable
    public error$ = this.store.select(productQuery.getProductError);
    public loading$ = this.store.select(productQuery.getLoading);
    public storeProducts$ = this.store.select(productQuery.getStoreProducts);

    constructor(private store: Store<ProductStore>) {}

    public productSuccess(successMessage: string): void {
        this.store.dispatch(
            productActions.IMPORT_SUCCESS({
                successMessage: successMessage
            })
        );
    }
    public productDelete(deleteId: string): void {
        this.store.dispatch(
            productActions.DELETE_PRODUCT({
                productId: deleteId
            })
        );
    }
    public productStock(deleteId: string, quantityInStock: number): void {
        this.store.dispatch(
            productActions.CHANGE_PRODUCT_STOCK({
                productId: deleteId,
                quantityInStock: quantityInStock
            })
        );
    }

    public importStart(
        categoryId: string,
        name: string,
        description: string,
        imageUrl: string,
        unitPrice: number,
        quantityInStock: number
    ): void {
        this.store.dispatch(
            productActions.IMPORT_START({
                categoryId: categoryId,
                name: name,
                description: description,
                imageUrl: imageUrl,
                unitPrice: unitPrice,
                quantityInStock: quantityInStock
            })
        );
    }
    public fetchStoreStart(): void {
        this.store.dispatch(productActions.FETCH_STORE_PRODUCTS_START());
    }

    public importFail(errorMessage: string): void {
        this.store.dispatch(
            productActions.IMPORT_FAIL({
                errorMessage: errorMessage
            })
        );
    }

    public clearError(): void {
        this.store.dispatch(productActions.CLEAR_ERROR());
    }
    public clearSuccess(): void {
        this.store.dispatch(productActions.CLEAR_SUCCESS());
    }
}
