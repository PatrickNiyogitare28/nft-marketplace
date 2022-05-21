import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './home/banner/banner.component';
import { TopSellersComponent } from './home/top-sellers/top-sellers.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    AppNavComponent,
    BannerComponent,
    TopSellersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule
  ],
  exports: [
    AppNavComponent,
    BannerComponent,
    TopSellersComponent
  ]
})
export class ComponentsModule { }
