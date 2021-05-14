import { EventEmitter } from "@angular/core";
import { Package } from "./package.model";

export class CatalogService {
    packageSelected = new EventEmitter<Package>();

  private packages: Package[] = [
    new Package('A test package', 'Just testing', '../assets/skincare.png'),
    new Package('Another test package', 'Just testing', '../assets/skincare.png')
  ];

  getPackages() {
      return this.packages.slice();
  }
}