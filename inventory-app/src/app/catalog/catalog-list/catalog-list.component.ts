import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  @Output() packageWasSelected = new EventEmitter<Package>();
  packages: Package[] = [
    new Package('A test package', 'Just testing', '../assets/skincare.png'),
    new Package('Another test package', 'Just testing', '../assets/skincare.png')
  ];

  constructor() {  }

  ngOnInit(): void {
  }

  onPackSelected(pack: Package) {
    this.packageWasSelected.emit(pack)
  }

}
