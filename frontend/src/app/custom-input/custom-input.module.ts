import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomInputComponent } from './components/custom-input.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LabelFieldComponent } from './components/label-field/label-field.component';
import { RequiredSymbolDirective } from './directives/required-symbol.directive';

@NgModule({
  declarations: [
    CustomInputComponent,
    ErrorMessageComponent,
    LabelFieldComponent,
    RequiredSymbolDirective,
  ],
  imports: [SharedModule],
  exports: [CustomInputComponent],
})
export class CustomInputModule {}
