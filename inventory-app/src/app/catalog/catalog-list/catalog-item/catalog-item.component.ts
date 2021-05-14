import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { Package } from '../../package.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() pack: Package;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.catalogService.packageSelected.emit(this.pack);
  }

}
