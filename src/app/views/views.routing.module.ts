import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ItemComponent } from "./item/item.component";
import { SellerComponent } from "./seller/seller.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: SellerComponent
    },
    {
        path: 'item',
        pathMatch: 'full',
        component: ItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ViewsRoutingModule {};