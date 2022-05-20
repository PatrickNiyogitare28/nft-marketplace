import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: ''
 },
 {
   path: '',
   loadChildren: () => import('./views/views.module').then( module => module.ViewsModule)
 }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
