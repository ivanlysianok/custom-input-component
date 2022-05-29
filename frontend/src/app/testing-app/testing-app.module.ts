import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';
import { UsersComponent } from './components/users/users.component';
import { TestingAppRoutingModule } from './testing-app-routing.module';
@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TestingAppRoutingModule,
    CustomControlsModule,
  ],
  providers: [],
})
export class TestingAppModule {}
