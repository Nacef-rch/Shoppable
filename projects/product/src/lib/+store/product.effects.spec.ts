import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { ProductEffects } from '@product/+store/product.effects';
import * as productAction from '@product/+store/product.actions';
import * as mockProduct from '@product/mocks/products.mock.json';
import { ApiService } from '@core/services/api/api.service';
import { I18nService } from '@i18n/services/i18n.service';

describe('UserEffects', () => {
    let effects: ProductEffects;
    let actions$: Observable<any>;
    let translate: I18nService;
    let httpTestingController: HttpTestingController;
    let http: ApiService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProductEffects,

                {
                    provide: ApiService,
                    useValue: {
                        get: jest.fn(),
                        post: jest.fn()
                    }
                },

                {
                    provide: I18nService,
                    useValue: {
                        lang: 'en'
                    }
                },

                provideMockActions(() => actions$)
            ],
            imports: [HttpClientTestingModule]
        });

        effects = TestBed.inject(ProductEffects);
        actions$ = TestBed.inject(Actions);
        http = TestBed.inject(ApiService);
    });
    it('should be created', async () => {
        expect(effects).toBeTruthy();

        expect(actions$).toBeTruthy();
        expect(http).toBeTruthy();
    });

    it('[IMPORT_PRODUCT] Should return productAction.AUTHENTICATE_SUCCESS', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = productAction.IMPORT_START(mockProduct.importMock);
        const completion = productAction.IMPORT_SUCCESS({
            successMessage: 'success!'
        });
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a: mockProduct.productResMock });
        const expected = cold('--c', { c: completion });
        // WHEN
        http.post = jest.fn(() => response);

        // THEN
        expect(effects.productImport$).toBeObservable(expected);
    });
    it('[DELETE_PRODUCT] Should return productAction.DELETE_PRODUCT', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = productAction.DELETE_PRODUCT(mockProduct.deleteMock);
        const completion = productAction.IMPORT_SUCCESS({
            successMessage: 'success!'
        });
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a: { message: 'Product deleted successfully' } });
        const expected = cold('--c', { c: completion });
        // WHEN
        http.delete = jest.fn(() => response);

        // THEN
        
        expect(effects.productDelete$).toBeObservable(expected);
    });
    it('[CHANGE_PRODUCT_STOCK] Should return productAction.CHANGE_PRODUCT_STOCK', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = productAction.CHANGE_PRODUCT_STOCK(mockProduct.QuantitySock);
        const completion = productAction.IMPORT_SUCCESS({
            successMessage: 'success!'
        });
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a: 'Stock value changed' });
        const expected = cold('--c', { c: completion });
        // WHEN
        http.post = jest.fn(() => response);

        // THEN
        expect(effects.productStock$).toBeObservable(expected);
    });
    it('[FETCH_STORE_PRODUCTS_START] Should return productAction.FETCH_STORE_PRODUCTS_START', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = productAction.FETCH_STORE_PRODUCTS_START();
        const completion = productAction.FETCH_STORE_PRODUCTS_SUCCESS(
            mockProduct.storeProductsMock
        );
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a:  mockProduct.storeProductsMock.products});
        const expected = cold('--c', { c: completion });
        // WHEN
        http.get = jest.fn(() => response);

        // THEN
        expect(effects.fetchStoreProducts$).toBeObservable(expected);
    });
    it('[FETCH_STORE_CATEGORY_START] Should return productAction.FETCH_STORE_CATEGORY_START', () => {
        httpTestingController = TestBed.inject(HttpTestingController);
        // GIVEN
        const action = productAction.FETCH_STORE_CATEGORY_START();
        const completion = productAction.FETCH_STORE_CATEGORY_SUCCESS(
            mockProduct.storeCategories
        );
        actions$ = hot('-a', { a: action });
        const response = cold('-a|', { a:  mockProduct.storeCategories.category  
        });
        const expected = cold('--c', { c: completion });
        // WHEN
        http.get = jest.fn(() => response);

        // THEN
        
        expect(effects.fetchStoreCategories$).toBeObservable(expected);
    });
});
