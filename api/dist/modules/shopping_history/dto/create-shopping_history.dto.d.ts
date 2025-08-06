declare class ProductDto {
    id: string;
    name: string;
    price: number;
    quantity: number;
}
export declare class CreateShoppingHistoryDto {
    totalPrice: number;
    products: ProductDto[];
}
export {};
