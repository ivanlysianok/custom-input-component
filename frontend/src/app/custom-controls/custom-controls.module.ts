import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorControlModule } from './controls/error-control/error-control.module';
import { InputFieldModule } from './controls/input-field/input-field.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputFieldModule,
    ErrorControlModule,
  ],
  exports: [InputFieldModule, ErrorControlModule],
})
export class CustomControlsModule {}
