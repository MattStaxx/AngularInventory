import { Component, OnInit } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  selectedPackage: Package;
  constructor() { }

  ngOnInit(): void {
  }

}
