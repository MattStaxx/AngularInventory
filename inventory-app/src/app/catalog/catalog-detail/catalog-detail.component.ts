import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css']
})
export class CatalogDetailComponent implements OnInit {
  @Input() pack: Package;
  constructor() { }

  ngOnInit(): void {
  }

}
