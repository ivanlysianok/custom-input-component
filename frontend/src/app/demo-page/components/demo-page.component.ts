import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent {
  public formGroup1: FormGroup;
  public formGroup2: FormGroup;
  public formGroup3: FormGroup;
  public formGroup4: FormGroup;
  public formGroup5: FormGroup;
  public formGroup6: FormGroup;
  public formGroup7: FormGroup;
  public formGroup8: FormGroup;
  public formGroup9: FormGroup;
  public formGroup10: FormGroup;

  public value = '';
  constructor(private formBuilder: FormBuilder) {
    this.formGroup1 = this.formBuilder.group({
      formField: [null],
    });

    this.formGroup2 = this.formBuilder.group({
      formField: [null],
    });

    this.formGroup3 = this.formBuilder.group({
      formField: [null, Validators.email],
    });

    this.formGroup4 = this.formBuilder.group({
      formField: [null],
    });

    this.formGroup5 = this.formBuilder.group({
      formField: [null, Validators.required],
    });

    this.formGroup6 = this.formBuilder.group({
      formField: [{ value: null, disabled: true }],
    });

    this.formGroup7 = this.formBuilder.group({
      formField: [null],
    });
    this.formGroup7.controls['formField'].patchValue('Ivan Lysianok');

    this.formGroup8 = this.formBuilder.group({
      formField: [null, Validators.minLength(10)],
    });
    this.formGroup8.controls['formField'].patchValue('Ivan Lysi');
    this.formGroup8.controls['formField'].markAsTouched();

    this.formGroup9 = this.formBuilder.group({
      formField: [null, Validators.pattern(/^[A-Za-z]*$/)],
    });
    this.formGroup9.controls['formField'].patchValue('*');
    this.formGroup9.controls['formField'].markAsTouched();

    this.formGroup10 = this.formBuilder.group({
      formField: [null],
    });
  }

  getValue(): void {
    this.value = this.formGroup10.controls['formField'].value;
  }

  patchValue(): void {
    this.formGroup10.controls['formField'].patchValue('Hello world!');
  }

  disable(): void {
    this.formGroup10.controls['formField'].disable();
  }

  enable(): void {
    this.formGroup10.controls['formField'].enable();
  }

  addValidation(): void {
    this.formGroup10.controls['formField'].addValidators(Validators.required);
    this.formGroup10.controls['formField'].updateValueAndValidity();
  }

  removeValidation(): void {
    this.formGroup10.controls['formField'].removeValidators(
      Validators.required
    );
    this.formGroup10.controls['formField'].updateValueAndValidity();
  }
}
