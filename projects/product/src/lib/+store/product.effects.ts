import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import * as ProductActions from '@product/+store/product.actions';

import { handleError } from '@authentication/helpers/handleError';

import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';
import { ProductImport } from '@product/models/product.model';

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
                        imageUrl: ImportAction.imageUrl
                    })
                    .pipe(
                        tap(() => {
                            console.log('object');
                        }),
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
}
