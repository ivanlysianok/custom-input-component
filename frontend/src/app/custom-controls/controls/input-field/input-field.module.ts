import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputFieldComponent } from './components/input-field/input-field.component';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [SharedModule],
  exports: [InputFieldComponent],
})
export class InputFieldModule {}
