import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    {
      path: '',
      component: UserComponent
    }
  ])]
})
export class UserRoutingModule { }
