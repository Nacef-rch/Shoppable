import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as productActions from '@product/+store/product.actions';
import { productQuery } from '@product/+store/product.selectors';
import { ProductStore } from '@product/+store/product.reducer';
import { CartProducts } from '@product/models/product.model';
@Injectable({
    providedIn: 'root'
})
export class ProductFacade {
    public success$ = this.store.select(productQuery.getProductSuccess);
    public error$ = this.store.select(productQuery.getProductError);
    public loading$ = this.store.select(productQuery.getLoading);
    public storeProducts$ = this.store.select(productQuery.getStoreProducts);
    public cartProducts$ = this.store.select(productQuery.getCartProducts);
    public storeCategories$ = this.store.select(productQuery.getStoreCategories);
    public cartQuantity$ = this.store.select(productQuery.getCartQuantity);
    public oneProduct$ = this.store.select(productQuery.getProduct);

    constructor(private store: Store<ProductStore>) {}

    public productSuccess(successMessage: string): void {
        this.store.dispatch(
            productActions.IMPORT_SUCCESS({
                successMessage: successMessage
            })
        );
    }

    public addToCart(product: CartProducts): void {
        this.store.dispatch(
            productActions.CART_PRODUCTS({
                product: product
            })
        );
    }

    public removeFromCart(product: CartProducts[], quantity: number): void {
        this.store.dispatch(
            productActions.REMOVE_CART_PRODUCTS({
                product: product,
                quantity: quantity
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
    public productLike(productId: string): void {
        this.store.dispatch(
            productActions.LIKE_PRODUCTS({
                productId: productId
            })
        );
    }
    public productUnLike(productId: string): void {
        this.store.dispatch(
            productActions.UNLIKE_PRODUCTS({
                productId: productId
            })
        );
    }
    public productComment(productId: string): void {
        this.store.dispatch(
            productActions.GET_ONE_PRODUCT_START({
                productId: productId
            })
        );
    }
    public postComment(productId: string, body: string): void {
        this.store.dispatch(
            productActions.POST_ONE_COMMENT_START({
                productId: productId,
                body: body
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

    public fetchCategoryStart(): void {
        this.store.dispatch(productActions.FETCH_STORE_CATEGORY_START());
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
    public loadingStart(): void {
        this.store.dispatch(productActions.LOADING_START());
    }
    public loadingStop(): void {
        this.store.dispatch(productActions.LOADING_STOP());
    }
}
