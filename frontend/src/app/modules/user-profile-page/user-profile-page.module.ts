import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomControlsModule } from 'src/app/custom-controls/custom-controls.module';
import { UserProfilePageComponent } from './components/user-profile-page.component';
import { UserProfilePageRoutingModule } from './user-profile-page-routing.module';

@NgModule({
  declarations: [UserProfilePageComponent],
  imports: [
    UserProfilePageRoutingModule,
    CustomControlsModule,
    ReactiveFormsModule,
  ],
  exports: [UserProfilePageComponent],
})
export class UserProfilePageModule {}
