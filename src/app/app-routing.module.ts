import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'home',
      loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)
  }, {
      path: 'user',
      loadChildren: () => import('src/app/modules/user/user.module').then(m => m.UserModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
