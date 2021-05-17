import { Product } from "../shared/product.model";

export class Package {
    public name: string;
    public description: string;
    public imagePath: string;
    public products: Product[];

    constructor(name: string, desc: string, imgPath: string, products: Product[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.products = products;
    }
}