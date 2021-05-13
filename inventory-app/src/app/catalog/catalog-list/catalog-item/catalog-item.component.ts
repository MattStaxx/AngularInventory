import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from '../../package.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() package: Package;
  
  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature: string) {
      this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
