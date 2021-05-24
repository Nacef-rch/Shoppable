import { ProductModule } from '@product/product.module';

describe('InternationalizationModule', () => {
    let productModuleLet: ProductModule;

    beforeEach(() => {
        productModuleLet = new ProductModule();
    });

    it('should create an instance', () => {
        expect(productModuleLet).toBeTruthy();
    });
});
