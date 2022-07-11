import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorControlModule } from '../error-control/error-control.module';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule, ErrorControlModule],
  exports: [InputFieldComponent],
})
export class InputFieldModule {}
