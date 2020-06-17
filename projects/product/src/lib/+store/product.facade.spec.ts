import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as productAction from '@product/+store/product.actions';
import { ProductFacade } from '@product/+store/product.facade';
import { ProductStore } from '@product/+store/product.reducer';
import * as mockProduct from '@product/mocks/products.mock.json';

describe('UserFacade', () => {
    let store: MockStore<ProductStore>;
    let facade: ProductFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductFacade, provideMockStore()]
        });
        store = TestBed.inject(Store) as MockStore<ProductStore>;
        //store = TestBed.inject(Store);
        facade = TestBed.inject(ProductFacade);
        spyOn(store, 'dispatch');
    });
    it('should be created', () => {
        expect(facade).toBeTruthy();
    });
    it('should dispatch a productAction.IMPORT_SUCCESS action when productSuccess is called', () => {
        // GIVEN

        const action = productAction.IMPORT_SUCCESS({ successMessage: 'successMessage' });
        // WHEN
        facade.productSuccess('successMessage');
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.DELETE_PRODUCT action when productDelete is called', () => {
        // GIVEN

        const action = productAction.DELETE_PRODUCT({ productId: 'aeazeazeaz' });
        // WHEN
        facade.productDelete('aeazeazeaz');
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.CHANGE_PRODUCT_STOCK action when productStock is called', () => {
        // GIVEN

        const action = productAction.CHANGE_PRODUCT_STOCK({
            productId: 'deleteId',
            quantityInStock: 26
        });
        // WHEN
        facade.productStock('deleteId', 26);
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.IMPORT_START action when importStart is called', () => {
        // GIVEN

        const action = productAction.IMPORT_START(mockProduct.importMock);
        // WHEN
        facade.importStart(
            mockProduct.importMock.categoryId,
            mockProduct.importMock.name,
            mockProduct.importMock.description,
            mockProduct.importMock.imageUrl,
            mockProduct.importMock.unitPrice,
            mockProduct.importMock.quantityInStock
        );
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.FETCH_STORE_PRODUCTS_START action when fetchStoreStart is called', () => {
        // GIVEN

        const action = productAction.FETCH_STORE_PRODUCTS_START();
        // WHEN
        facade.fetchStoreStart();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.FETCH_STORE_CATEGORY_START action when fetchCategoryStart is called', () => {
        // GIVEN

        const action = productAction.FETCH_STORE_CATEGORY_START();
        // WHEN
        facade.fetchCategoryStart();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.CLEAR_ERROR action when clearError is called', () => {
        // GIVEN

        const action = productAction.CLEAR_ERROR();
        // WHEN
        facade.clearError();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.CLEAR_SUCCESS action when clearSuccess is called', () => {
        // GIVEN

        const action = productAction.CLEAR_SUCCESS();
        // WHEN
        facade.clearSuccess();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.LOADING_START action when loadingStart is called', () => {
        // GIVEN

        const action = productAction.LOADING_START();
        // WHEN
        facade.loadingStart();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.LOADING_STOP action when loadingStop is called', () => {
        // GIVEN

        const action = productAction.LOADING_STOP();
        // WHEN
        facade.loadingStop();
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
    it('should dispatch a productAction.IMPORT_FAIL action when importFail is called', () => {
        // GIVEN

        const action = productAction.IMPORT_FAIL({ errorMessage: 'errorMessage' });
        // WHEN
        facade.importFail('errorMessage');
        // THEN
        expect(store.dispatch).toHaveBeenLastCalledWith(action);
    });
});
