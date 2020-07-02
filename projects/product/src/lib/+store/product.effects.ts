import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as ProductActions from '@product/+store/product.actions';
import { ProductImport } from '@product/models/product.model';

import { handleError } from '@authentication/helpers/handleError';
import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';
import { I18nFacade } from '@i18n/+store/i18n.facade';
import { FirebaseApi } from '@core/constants/api-constants';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private translate: I18nService,
        private http: ApiService,
        private i18nFacade: I18nFacade
    ) {}
    public productImport$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.IMPORT_START),

            switchMap((ImportAction: ProductImport) => {
                return this.http
                    .post(FirebaseApi.products, {
                        categoryId: ImportAction.categoryId,
                        name: ImportAction.name,
                        description: ImportAction.description,
                        imageUrl: ImportAction.imageUrl,
                        unitPrice: ImportAction.unitPrice,
                        quantityInStock: ImportAction.quantityInStock
                    })
                    .pipe(
                        map((resData) => {
                            const currentLang = this.translate.currentLang;
                            let successMessage = 'Votre produit a été importé avec succès';
                            if (currentLang == 'en') {
                                successMessage = 'Your product imported successfully';
                            }
                            return ProductActions.IMPORT_SUCCESS({
                                successMessage: successMessage
                            });
                        }),
                        catchError((error) => {
                            const currentLang = this.translate.currentLang;
                            let errorMessage = `Quelque chose s'est mal passé essaie encore.`;
                            if (currentLang == 'en') {
                                errorMessage = 'Something went wrong , try again.';
                            }
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
                return this.http.delete(`${FirebaseApi.products}/${Url.productId}`).pipe(
                    map((resData) => {
                        const currentLang = this.translate.currentLang;
                        let successMessage = 'Produit(s) supprimé(s) avec succès';
                        if (currentLang == 'en') {
                            successMessage = 'Product(s) deleted successfully';
                        }
                        return ProductActions.IMPORT_SUCCESS({
                            successMessage: successMessage
                        });
                    }),
                    catchError((error) => {
                        const currentLang = this.translate.currentLang;
                        let errorMessage = `Quelque chose s'est mal passé essaie encore.`;
                        if (currentLang == 'en') {
                            errorMessage = 'Something went wrong , try again.';
                        }
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
                    .post(`${FirebaseApi.products}/${StockAction.productId}/stock`, {
                        quantityInStock: StockAction.quantityInStock
                    })
                    .pipe(
                        map((resData) => {
                            const currentLang = this.translate.currentLang;
                            let successMessage = 'Stock mis à jour';
                            if (currentLang == 'en') {
                                successMessage = 'Stock get updated';
                            }
                            return ProductActions.IMPORT_SUCCESS({
                                successMessage: successMessage
                            });
                        }),
                        catchError((error) => {
                            const currentLang = this.translate.currentLang;
                            let errorMessage = `Quelque chose s'est mal passé essaie encore.`;
                            if (currentLang == 'en') {
                                errorMessage = 'Something went wrong , try again.';
                            }
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
                return this.http.get(FirebaseApi.productsStore).pipe(
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
                return this.http.get(`/stores/categories`).pipe(
                    map((category) => {
                        ProductActions.IMPORT_SUCCESS({
                            successMessage: 'success!'
                        });
                        return ProductActions.FETCH_STORE_CATEGORY_SUCCESS({
                            category
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
    public likeProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.LIKE_PRODUCTS),

            switchMap((Url: { productId: string }) => {
                return this.http.get(`${FirebaseApi.products}/${Url.productId}/like`).pipe(
                    map((products) => {
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
    public unlikeProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.UNLIKE_PRODUCTS),

            switchMap((Url: { productId: string }) => {
                return this.http.get(`${FirebaseApi.products}/${Url.productId}/unlike`).pipe(
                    map((products) => {
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
    public getOneProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.GET_ONE_PRODUCT_START),

            switchMap((Url: { productId: string }) => {
                return this.http.get(`${FirebaseApi.products}/${Url.productId}`).pipe(
                    map((productData) => {
                        ProductActions.IMPORT_SUCCESS({
                            successMessage: 'success!'
                        });
                        return ProductActions.GET_ONE_PRODUCT_SUCCESS({
                            product: productData
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

    public productComment$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.POST_ONE_COMMENT_START),
            switchMap((comment: { productId: string; body: string }) => {
                return this.http
                    .post(`${FirebaseApi.products}/${comment.productId}/comment`, {
                        body: comment.body
                    })
                    .pipe(
                        map((resData) => {
                            return ProductActions.IMPORT_SUCCESS({
                                successMessage: resData
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
}
