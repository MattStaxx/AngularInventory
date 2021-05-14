import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Package } from './package.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [CatalogService]
})
export class CatalogComponent implements OnInit {
  selectedPackage: Package;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.packageSelected.subscribe(
      (pack: Package) => {
        this.selectedPackage = pack;
      }
    )
  }

}
