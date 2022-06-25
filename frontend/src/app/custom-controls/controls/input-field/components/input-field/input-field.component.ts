import { Component, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../../models/input-type.enum';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() labelText: string | undefined;
  @Input() inputType: InputType | string = 'text';
  @Input() placeholderText: string = '';
  @Input() hintText: string | undefined;

  public value: any;
  public onChange = (value: any) => {};
  public onTouched = () => {};
  public INPUT_TYPE = InputType;

  writeValue(obj: any): void {
    console.log('writeValue');
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  onValueChange(inputEvent: any): void {
    this.value = inputEvent.target.value;
    this.onChange(this.value);
  }

  @HostListener('input', ['$event.target.value']) onInputValueChange(
    value: any
  ): void {
    this.value = value;
    this.onChange(this.value);
  }
  // Add on blur @HostListener
}
