import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { IlInputFieldComponent } from './components/il-input-field/il-input-field.component';

@NgModule({
  declarations: [IlInputFieldComponent],
  imports: [SharedModule],
  exports: [IlInputFieldComponent],
})
export class IlInputFieldModule {}
