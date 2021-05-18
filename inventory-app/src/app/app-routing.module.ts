import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { CatalogDetailComponent } from "./catalog/catalog-detail/catalog-detail.component";
import { CatalogEditComponent } from "./catalog/catalog-edit/catalog-edit.component";
import { CatalogStartComponent } from "./catalog/catalog-start/catalog-start.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/packages', pathMatch: 'full' },
    { path: 'packages', component: CatalogComponent , children: [
        { path: '', component: CatalogStartComponent },
        { path: 'new', component: CatalogEditComponent },
        { path: ':id', component: CatalogDetailComponent },
        { path: ':id/edit', component: CatalogEditComponent }
    ]},
    { path: 'inventory-list', component: InventoryListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule  {

}