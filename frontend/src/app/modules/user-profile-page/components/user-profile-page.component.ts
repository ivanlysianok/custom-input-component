import { AfterViewInit, Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { getControl } from 'src/app/shared/functions/get-control.function';

@Component({
  selector: 'user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent {
  public dataFormGroup: FormGroup;
  public getControl = getControl;
  constructor(private formBuilder: FormBuilder) {
    this.dataFormGroup = this.formBuilder.group({
      email: [null, [Validators.required]],
    });
  }

  getValue(): void {
    console.log(this.dataFormGroup.controls['email'].value);
  }

  setDisabledState(): void {
    this.dataFormGroup.disable();
  }

  setEnableState(): void {
    this.dataFormGroup.enable();
  }

  patchValue(): void {
    this.dataFormGroup.controls['email'].patchValue('Ivan Lysianok');
  }

  resetValue(): void {
    this.dataFormGroup.controls['email'].reset();
  }

  addValidators(): void {
    this.dataFormGroup.controls['email'].addValidators(Validators.email);
    this.dataFormGroup.controls['email'].updateValueAndValidity();
  }

  hasValidators(): void {
    console.log(this.dataFormGroup.controls['email']);
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      return control.value === 'hello' ? { invalidControl: true } : null;
    };
  }
}
