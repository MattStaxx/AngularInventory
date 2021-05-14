import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() productAdded = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const prodName = this.nameInputRef.nativeElement.value;
    const prodAmount = this.amountInputRef.nativeElement.value;
    const newProduct = new Product(prodName, prodAmount);
    this.productAdded.emit(newProduct);
  }

}
