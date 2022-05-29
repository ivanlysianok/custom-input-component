import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IlInputFieldModule } from './controls/il-input-field/il-input-field.module';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, IlInputFieldModule],
  exports: [IlInputFieldModule],
})
export class CustomControlsModule {}
