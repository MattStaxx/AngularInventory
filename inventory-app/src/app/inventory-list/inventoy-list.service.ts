import { EventEmitter } from "@angular/core";
import { Product } from "../shared/product.model";

export class InventoryListService {
    productsChanged = new EventEmitter<Product[]>();
    private products: Product[] = [
        new Product('Fire starting kit', 2),
        new Product('Sleeping bag', 1)
    ];

    getProducts() {
        return this.products.slice();
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.emit(this.products.slice());
    }
}