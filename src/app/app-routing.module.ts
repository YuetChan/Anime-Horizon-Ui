import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'home',
      loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)
  }, {
      path: 'studio',
      loadChildren: () => import('src/app/modules/studio/studio.module').then(m => m.StudioModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
