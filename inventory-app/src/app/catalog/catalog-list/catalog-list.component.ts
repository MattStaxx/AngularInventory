import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  packages: Package[];

  constructor(private catalogService: CatalogService) {  }

  ngOnInit(): void {
    this.packages = this.catalogService.getPackages();
  }
}
