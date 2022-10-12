import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent {
  public demoGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.demoGroup = this.formBuilder.group({
      demoField: [null, Validators.required],
    });
  }

  getValue(): void {
    console.log(this.demoGroup.get('demoField')?.value);
  }
}
