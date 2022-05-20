import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppNavComponent
  ]
})
export class ComponentsModule { }
