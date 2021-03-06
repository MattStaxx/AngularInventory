import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { InventoryListService } from "../inventory-list/inventoy-list.service";
import { Product } from "../shared/product.model";
import { Package } from "./package.model";

@Injectable()
export class CatalogService {
    packageSelected = new Subject<Package>();

  private packages: Package[] = [
    new Package(
      'Backpacker Gear', 
      'Everything you need to get started!', 
      '../assets/skincare.png',
      [
        new Product('Tent', 1),
        new Product('Pack', 1)
      ]),
    new Package(
      'Emergency Kit', 
      'Essentials for what if scenarios...', 
      '../assets/skincare.png',
      [
        new Product('Flint & Striker', 1),
        new Product('Space Blanket', 2),
      ])
  ];

  constructor(private invServ: InventoryListService) {}

  getPackages() {
      return this.packages.slice();
  }

  addProductsToInventoryList(products: Product[]) {
    this.invServ.addProducts(products);
  }

  getPackage(index: number) {
    return this.packages[index];
  }

  addNewPackage() {

  }
}