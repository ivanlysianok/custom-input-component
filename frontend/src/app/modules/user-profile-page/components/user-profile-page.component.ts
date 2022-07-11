import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent {
  public dataFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.dataFormGroup = this.formBuilder.group({
      email: [null, [Validators.email, Validators.minLength(5)]],
    });
  }

  getValue(): void {
    console.log(this.dataFormGroup.controls['email'].touched);
  }

  setDisabledState(): void {
    this.dataFormGroup.disable();
  }

  setEnableState(): void {
    this.dataFormGroup.enable();
  }

  patchValue(): void {
    this.dataFormGroup.controls['test'].patchValue('Ivan Lysianok');
  }

  addValidators(): void {
    this.dataFormGroup.get('email')?.addValidators(Validators.required);
  }

  hasValidators(): void {
    //
  }
}
