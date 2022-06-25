import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfilePageComponent } from './components/user-profile-page.component';

const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfilePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfilePageRoutingModule {}
