import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ViewsRoutingModule } from './views.routing.module';
import { SellerComponent } from './seller/seller.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    HomeComponent,
    SellerComponent,
    ItemComponent
    ],
  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
