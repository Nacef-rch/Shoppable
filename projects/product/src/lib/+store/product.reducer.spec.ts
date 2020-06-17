import * as productAction from '@product/+store/product.actions';
import { productInitialState, productReducer as reducer } from '@product/+store/product.reducer';
import * as productMock from '@product/mocks/products.mock.json';

describe('productReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            // GIVEN
            // WHEN
            const result = reducer(undefined, {} as any);
            // THEN
            expect(result).toMatchSnapshot();
        });

        describe('PRODUCT IMPORT SUCCESS , START AND FAIL', () => {
            it('`IMPORT_SUCCESS`', () => {
                // GIVEN
                const action = productAction.IMPORT_SUCCESS({
                    successMessage: 'success'
                });
                // WHEN
                const result = reducer(productInitialState, action);
                // THEN
                expect(result).toMatchSnapshot();
            });
        });
        it('`IMPORT_FAIL`', () => {
            // GIVEN
            const errorMessage = 'Error';
            const action = productAction.IMPORT_FAIL({ errorMessage });
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
        it('IMPORT_START', () => {
            // GIVEN
            const action = productAction.IMPORT_START(productMock.importMock);
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('DELETE_PRODUCT', () => {
        it('DELETE_PRODUCT', () => {
            // GIVEN
            const action = productAction.DELETE_PRODUCT(productMock.deleteMock);
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('FETECH STORE SUCESS & START', () => {
        it('FETCH_STORE_PRODUCTS_SUCCESS', () => {
            // GIVEN
            const action = productAction.FETCH_STORE_PRODUCTS_SUCCESS(
                productMock.storeProductsMock
            );
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
        it('FETCH_STORE_PRODUCTS_START', () => {
            // GIVEN
            const action = productAction.FETCH_STORE_PRODUCTS_START();
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('FETECH CATEGORY SUCESS & START', () => {
        it('FETCH_STORE_CATEGORY_SUCCESS', () => {
            // GIVEN
            const action = productAction.FETCH_STORE_CATEGORY_SUCCESS(productMock.storeCategories);
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
        it('FETCH_STORE_CATEGORY_START', () => {
            // GIVEN
            const action = productAction.FETCH_STORE_CATEGORY_START();
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('CHANGE_PRODUCT_STOCK', () => {
        it('CHANGE_PRODUCT_STOCK', () => {
            // GIVEN
            const action = productAction.CHANGE_PRODUCT_STOCK(productMock.QuantitySock);
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('LOADING', () => {
        it('LOADING_START', () => {
            // GIVEN
            const action = productAction.LOADING_START();
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
        it('LOADING_STOP', () => {
            // GIVEN
            const action = productAction.LOADING_STOP();
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
    describe('ERROR+SUCESS', () => {
        it('CLEAR_ERROR', () => {
            // GIVEN
            const action = productAction.CLEAR_ERROR();
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
        it('CLEAR_SUCCESS', () => {
            // GIVEN
            const action = productAction.CLEAR_SUCCESS();
            // WHEN
            const result = reducer(productInitialState, action);
            // THEN
            expect(result).toMatchSnapshot();
        });
    });
});
