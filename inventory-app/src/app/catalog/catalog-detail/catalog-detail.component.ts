import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
  pack: Package;
  id: number;
  
  constructor(private catalogService: CatalogService,
              private route: ActivatedRoute) { 
          
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.pack = this.catalogService.getPackage(this.id);
        }
      );
  }

  onAddToInventoryList() {
    this.catalogService.addProductsToInventoryList(this.pack.products); 
  }

}
