import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
  @Input() pack: Package;
  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
  }

  onAddToInvetoryList() {
    this.catalogService.addProductsToInventoryList(this.pack.products); 
  }

}
