# Angular 13 - Custom form input component

## ![test](src/assets/images/preview.png)

Hi! Let me introduce my new project - Custom form input component that is fully compatible with Angular forms API (Working good in case of Reactive forms & Template
driven forms), as well as with all built-in and custom form validators.

DEMO: https://custom-input-component-demo.netlify.app/

### How to run locally
```
1. Clone repository
$ git clone https://github.com/ivanlysianok/custom-input-component.git

2. Go into front-end folder
$ cd frontend

3. Instal npm packages
$ npm install

4. Run application
$ ng serve
```

### Example of usage
`app.component.ts`

```
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      formField: [null, Validators.required],
    });
  }
```

`app.component.html`

```
<form [formGroup]="formGroup">
  <custom-input
   formControlName="formField"
   placeholderText="This is placeholder"
   labelText="This is input label"
  ></custom-input>
</form>
```

### Features
- [X] Compatible with Reactive & Template driven forms
- [X] Compatible with built-in & custom validators
- [X] Customizable & reusable code
- [X] Handle validation errors (predefined error messages for all built-in validators)
