import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { InputType } from '../types/input.type';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements ControlValueAccessor {
  /**
   * Label text
   */
  @Input() labelText: string = '';
  /**
   * Input has different types - text, email, number
   */
  @Input() inputType: InputType = 'text';
  /**
   * Placeholder text
   */
  @Input() placeholderText: string = '';
  /**
   * Flag which allows set required state manually and display required symbol (*)
   */
  @Input() isRequired?: boolean;
  /**
   * Setter for @see{@link isDisabled} property
   */
  @Input() set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  /**
   * Reference to input element
   */
  @ViewChild('input', { static: true })
  input: ElementRef | null = null;

  /**
   * Flag for control disabled state
   */
  public isDisabled?: boolean;
  /**
   * Control value
   */
  public value: any;
  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private renderer: Renderer2, public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  writeValue(obj: any): void {
    if (this.input) {
      this.renderer.setProperty(this.input.nativeElement, 'value', obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /**
   * Fired when control value changed
   */
  public onValueChange(): void {
    if (!this.input) {
      return;
    }
    this.value = this.input.nativeElement.value;
    this.onChange(this.value);
  }

  /**
   * Fired when user focusing to control
   */
  public onFocusOut(): void {
    this.onTouched();
  }

  /**
   * Checks if control has required validators.
   * @returns TRUE if has, otherwise FALSE
   */
  hasRequiredValidator(): boolean {
    if (!this.ngControl.control) {
      return false;
    }
    return (
      this.ngControl.control.hasValidator(Validators.required) ||
      this.ngControl.control.hasValidator(Validators.requiredTrue)
    );
  }
}
