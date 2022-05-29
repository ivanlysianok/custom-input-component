import { Component, Input } from '@angular/core';
import { InputType } from '../../models/input-type.type';

@Component({
  selector: 'il-input-field',
  templateUrl: './il-input-field.component.html',
  styleUrls: ['./il-input-field.component.scss'],
})
export class IlInputFieldComponent {
  @Input() inputType: InputType | undefined;
  @Input() labelText: string | undefined;
}
