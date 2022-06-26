import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule],
  exports: [InputFieldComponent],
})
export class InputFieldModule {}
