export class Product {
    constructor(
        public titre: string,
        public description: string,
        public categoryId: string,
        public imageUrl: string,
        public addedAt: Date,
        public storeId: string,
        public productId: string,
        private userHandle: string
    ) {}
}
export interface StoreProducts {
    position: number;
    productId: string;
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    storeId: string;
    userHandle: string;
}

export interface ProductImport {
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
}
