import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from '../../package.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() pack: Package;
  
  @Output() packSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.packSelected.emit();
  }

}
