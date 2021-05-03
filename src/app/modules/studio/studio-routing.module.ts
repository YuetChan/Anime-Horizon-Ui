import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudioComponent } from './pages/studio/studio.component';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    {
      path: '',
      component: StudioComponent
    }
  ])]
})
export class StudioRoutingModule { }
