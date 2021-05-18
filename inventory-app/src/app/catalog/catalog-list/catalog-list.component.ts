import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Package } from '../package.model';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  packages: Package[];

  constructor(private catalogService: CatalogService,
    private router: Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.packages = this.catalogService.getPackages();
  }

  onAddPackage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
