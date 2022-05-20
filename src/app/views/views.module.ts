import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ViewsRoutingModule } from './views.routing.module';



@NgModule({
  declarations: [
    HomeComponent
    ],
  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
