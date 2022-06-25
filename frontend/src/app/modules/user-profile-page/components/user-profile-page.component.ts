import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent {
  public dataFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.dataFormGroup = this.formBuilder.group({
      test: [],
    });
  }

  getValue(): void {
    console.log(this.dataFormGroup.value);
  }
}
