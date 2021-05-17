import { Component, Input, OnInit } from '@angular/core';
import { Package } from '../../package.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() pack: Package;
  @Input() index: number;

  ngOnInit(): void {
  }
}
