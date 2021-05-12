import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  products: Product[] = [
    new Product('Fire starting kit', 2),
    new Product('Sleeping bag', 1)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
