import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  packages: Package[] = [
    new Package('A test package', 'Just testing', '../assets/skincare.png'),
    new Package('A test package', 'Just testing', '../assets/skincare.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
