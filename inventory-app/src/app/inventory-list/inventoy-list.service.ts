import { Subject } from 'rxjs'; 
import { Product } from "../shared/product.model";

export class InventoryListService {
    productsChanged = new Subject<Product[]>();
    private products: Product[] = [
        new Product('Sleeping bag', 1),
        new Product('Camp Stove', 1),
        new Product('Fire starting kit', 2)
    ];

    getProducts() {
        return this.products.slice();
    }

    addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
    }

    addProducts(products: Product[]) {
        this.products.push(...products);
        this.productsChanged.next(this.products.slice());
    }
}