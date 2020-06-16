import { Action, createReducer, on } from '@ngrx/store';
import * as productActin from '@product/+store/product.actions';
import { StoreProducts, StoreCategories } from '@product/models/product.model';

describe('authReducer', () => {
    describe('undefined action', () => {
        it('should return the default state', () => {
            // GIVEN
            // WHEN
            const result = reducer(undefined, {} as any);
            // THEN
            expect(result).toMatchSnapshot();
        });