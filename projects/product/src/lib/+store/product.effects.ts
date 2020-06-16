import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as ProductActions from '@product/+store/product.actions';
import { ProductImport } from '@product/models/product.model';

import { handleError } from '@authentication/helpers/handleError';
import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private translate: I18nService,
        private http: ApiService
    ) {}
    public productImport$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.IMPORT_START),

            switchMap((ImportAction: ProductImport) => {
                return this.http
                    .post('/products', {
                        categoryId: ImportAction.categoryId,
                        name: ImportAction.name,
                        description: ImportAction.description,
                        imageUrl: ImportAction.imageUrl,
                        unitPrice: ImportAction.unitPrice,
                        quantityInStock: ImportAction.quantityInStock
                    })
                    .pipe(
                        map((resData) => {
                            console.log('success');
                            console.log(resData);
                            return ProductActions.IMPORT_SUCCESS({
                                successMessage: 'success!'
                            });
                        }),
                        catchError((error) => {
                            console.log('error');
                            console.log(error);
                            const errorMessage = handleError(error, this.translate.lang);
                            return of(ProductActions.IMPORT_FAIL({ errorMessage }));
                        })
                    );
            })
        )
    );
    public productDelete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.DELETE_PRODUCT),
            switchMap((Url: { productId: string }) => {
                return this.http.delete(`/products/${Url.productId}`).pipe(
                    map((resData) => {
                        return ProductActions.IMPORT_SUCCESS({
                            successMessage: 'success!'
                        });
                    }),
                    catchError((error) => {
                        const errorMessage = handleError(error, this.translate.lang);
                        return of(ProductActions.IMPORT_FAIL({ errorMessage }));
                    })
                );
            })
        )
    );
    public productStock$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.CHANGE_PRODUCT_STOCK),
            switchMap((StockAction: { productId: string; quantityInStock: number }) => {
                return this.http
                    .post(`/products/${StockAction.productId}/stock`, {
                        quantityInStock: StockAction.quantityInStock
                    })
                    .pipe(
                        map((resData) => {
                            return ProductActions.IMPORT_SUCCESS({
                                successMessage: 'success!'
                            });
                        }),
                        catchError((error) => {
                            const errorMessage = handleError(error, this.translate.lang);
                            return of(ProductActions.IMPORT_FAIL({ errorMessage }));
                        })
                    );
            })
        )
    );

    public fetchStoreProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.FETCH_STORE_PRODUCTS_START),

            switchMap(() => {
                return this.http.get('/products/store').pipe(
                    map((products) => {
                        ProductActions.IMPORT_SUCCESS({
                            successMessage: 'success!'
                        });
                        return ProductActions.FETCH_STORE_PRODUCTS_SUCCESS({
                            products
                        });
                    }),
                    catchError((error) => {
                        const errorMessage = handleError(error, this.translate.lang);
                        return of(ProductActions.IMPORT_FAIL({ errorMessage }));
                    })
                );
            })
        )
    );
    public fetchStoreCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.FETCH_STORE_CATEGORY_START),

            switchMap(() => {
                return this.http.get('/stores/categories').pipe(
                    map((category) => {
                        ProductActions.IMPORT_SUCCESS({
                            successMessage: 'success!'
                        });
                        return ProductActions.FETCH_STORE_CATEGORY_SUCCESS({
                            category
                        });
                    }),
                    catchError((error) => {
                        console.log('error');
                        console.log(error);
                        const errorMessage = handleError(error, this.translate.lang);
                        return of(ProductActions.IMPORT_FAIL({ errorMessage }));
                    })
                );
            })
        )
    );
}
