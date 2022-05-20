import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
  path: 'home',
  pathMatch: 'full',
  redirectTo: ''
 },
 {
   path: 'home',
   component: HomeComponent,
   children: [
     {
       path: '',
       loadChildren: () => import('./views/views.module').then( module => module.ViewsModule)
     }
   ]
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
