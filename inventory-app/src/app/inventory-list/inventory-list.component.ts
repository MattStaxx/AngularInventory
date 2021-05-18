import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product.model';
import { InventoryListService } from './inventoy-list.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit, OnDestroy {
  products: Product[];
  private prodChangeSub: Subscription;
  
  constructor(private invServ: InventoryListService) { }

  ngOnInit(): void {
    this.products = this.invServ.getProducts();
    this.prodChangeSub = this.invServ.productsChanged
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }

  ngOnDestroy(): void {
    this.prodChangeSub.unsubscribe();
  }
}
