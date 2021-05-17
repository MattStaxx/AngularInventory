import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { CatalogComponent } from "./catalog/catalog.component";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/packages', pathMatch: 'full' },
    {path: 'packages', component: CatalogComponent },
    {path: 'inventory-list', component: InventoryListComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule  {

}