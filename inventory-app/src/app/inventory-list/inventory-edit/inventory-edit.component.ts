import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/product.model';
import { InventoryListService } from '../inventoy-list.service';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private invService: InventoryListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const prodName = this.nameInputRef.nativeElement.value;
    const prodAmount = this.amountInputRef.nativeElement.value;
    const newProduct = new Product(prodName, prodAmount);
    this.invService.addProduct(newProduct);
  }

}
