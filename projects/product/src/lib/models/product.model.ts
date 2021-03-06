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
    unitPrice: number;
    quantityInStock: number;
    storeId: string;
    userHandle: string;
    likeCount: number;
}

export interface StoreCategories {
    lostOfCategories: string[];

    storeId: string;
}

export interface ProductImport {
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    unitPrice: number;
    quantityInStock: number;
}

export interface CartProducts {
    position: number;
    productId: string;
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    unitPrice: number;
    quantityInStock: number;
    storeId: string;
    userHandle: string;
    likeCount: number;
    quantitySelected: number;
}
export interface OneProduct {
    position: number;
    productId: string;
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
    unitPrice: number;
    quantityInStock: number;
    storeId: string;
    userHandle: string;
    likeCount: number;

    commentCount: number;
    comments: [
        {
            createdAt: string;
            productId: string;
            userHandle: string;
            body: string;
        }
    ];
}
