import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldModule } from './controls/input-field/input-field.module';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, InputFieldModule],
  exports: [InputFieldModule],
})
export class CustomControlsModule {}
