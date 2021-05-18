import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogListComponent } from './catalog/catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';
import { CatalogItemComponent } from './catalog/catalog-list/catalog-item/catalog-item.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryEditComponent } from './inventory-list/inventory-edit/inventory-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { InventoryListService } from './inventory-list/inventoy-list.service';
import { AppRoutingModule } from './app-routing.module';
import { CatalogStartComponent } from './catalog/catalog-start/catalog-start.component';
import { CatalogEditComponent } from './catalog/catalog-edit/catalog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    CatalogListComponent,
    CatalogDetailComponent,
    CatalogItemComponent,
    DropdownDirective,
    InventoryListComponent,
    InventoryEditComponent,
    CatalogStartComponent,
    CatalogEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [InventoryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
