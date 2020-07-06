import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as StoreActions from '@store/+store/store.actions';

import { handleError } from '@authentication/helpers/handleError';
import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';
import { I18nFacade } from '@i18n/+store/i18n.facade';
import { environment } from '@env/environment';

@Injectable()
export class StoreEffects {
    constructor(
        private actions$: Actions,
        private translate: I18nService,
        private http: ApiService,
        private i18nFacade: I18nFacade
    ) {}

    public fetchStores$ = createEffect(() =>
        this.actions$.pipe(
            ofType(StoreActions.FETCH_STORE_START),

            switchMap(() => {
                return this.http.get(`/stores`).pipe(
                    map((stores) => {
                        return StoreActions.FETCH_STORES_SUCCESS({
                            stores
                        });
                    }),
                    catchError((error) => {
                        const errorMessage = handleError(error, this.translate.lang);
                        return of(StoreActions.IMPORT_FAIL({ errorMessage }));
                    })
                );
            })
        )
    );
}
