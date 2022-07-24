import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { INPUT_TYPE } from '../../models/input-type.enum';
import { InputType } from '../../models/input-type.type';

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
export class InputFieldComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input() formControl: FormControl | null = null;
  @Input() labelText: string | undefined;
  @Input() inputType: InputType | undefined;
  @Input() placeholderText: string = '';
  @Input() set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  @ViewChild('inputReference')
  input: ElementRef | null = null;

  public INPUT_TYPE = INPUT_TYPE;
  public isDisabled = false;
  public value: string | null = null;
  public onChange = (value: any) => {};
  public onTouched = () => {};
  public imageSource = '';

  constructor(
    private renderer: Renderer2,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (this.inputType === 'email') {
      this.formControl?.addValidators(Validators.email);
    }
    this.imageSource = `assets/images/${this.inputType}.svg`;
    this.setInputType();
    this.changeDetector.detectChanges();
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

  onValueChange(): void {
    if (!this.input) {
      return;
    }
    this.value = this.input.nativeElement.value;
    this.onChange(this.value);
  }

  onFocusOut(): void {
    this.onTouched();
  }

  setInputType(): void {
    if (!this.input || !this.inputType) {
      return;
    }
    switch (this.inputType) {
      case 'email':
        this.input.nativeElement.type = 'email';
        break;
      case 'phone':
        this.input.nativeElement.type = 'number';
        break;
      default:
        this.input.nativeElement.type = 'text';
    }
  }
}
