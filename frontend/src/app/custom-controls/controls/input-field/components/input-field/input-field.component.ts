import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NgControl,
  NG_VALUE_ACCESSOR,
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
  @Input() labelText: string | undefined;
  @Input() inputType: InputType | undefined;
  @Input() placeholderText: string = '';
  @Input() hintText: string = '';
  @Input() set disabled(value: boolean) {
    this.setDisabledState(value);
  }

  @ViewChild('inputReference')
  input: ElementRef | null = null;

  public INPUT_TYPE = INPUT_TYPE;
  public isDisabled = false;
  public control: FormControl | null = null;
  public value: string | null = null;
  public onChange = (value: any) => {};
  public onTouched = () => {};
  public imageSource = '';

  constructor(
    private renderer: Renderer2,
    private injector: Injector,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    // TODO - disabled state background chagnes to white
    // TODO - implement nubmer validation if inputType is number
    // TODO - implement custom error message
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    }
    this.imageSource = `assets/images/${this.inputType}.svg`;
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
}
