import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { InventoryListService } from './inventoy-list.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  products: Product[];
  
  constructor(private invServ: InventoryListService) { }

  ngOnInit(): void {
    this.products = this.invServ.getProducts();
    this.invServ.productsChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }
}
