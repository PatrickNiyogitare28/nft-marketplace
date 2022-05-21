import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './home/banner/banner.component';
import { TopSellersComponent } from './home/top-sellers/top-sellers.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HotBidsComponent } from './home/hot-bids/hot-bids.component';
import { ButtonComponent } from './elements/button/button.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './copyright/copyright.component';



@NgModule({
  declarations: [
    AppNavComponent,
    BannerComponent,
    TopSellersComponent,
    HotBidsComponent,
    ButtonComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule
  ],
  exports: [
    AppNavComponent,
    BannerComponent,
    TopSellersComponent,
    HotBidsComponent,
    ButtonComponent,
    FooterComponent,
    CopyrightComponent
  ]
})
export class ComponentsModule { }
