import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ControlError } from '../models/control-error.interface';

@Component({
  selector: 'error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.scss'],
})
export class ErrorControlComponent implements OnChanges {
  @Input() errors: ValidationErrors | null | undefined;
  public displayedErrors: ControlError[] = [];

  ngOnChanges(): void {
    this.displayedErrors = [];
    if (!this.errors) {
      return;
    }
    for (let err in this.errors) {
      if (err === 'required') {
        this.addError(err, `This field is required`);
      }
      if (err === 'requiredTrue') {
        this.addError(err, `This field requires true value`);
      }
      if (err === 'minlength') {
        this.addError(
          err,
          `The minimum length of field should be ${this.errors[err].requiredLength}`
        );
      }
      if (err === 'maxlength') {
        this.addError(
          err,
          `The maximum length of field should be ${this.errors[err].requiredLength}`
        );
      }
      if (err === 'min') {
        this.addError(
          err,
          `The minimum length of field should be ${this.errors[err].min}`
        );
      }
      if (err === 'max') {
        this.addError(
          err,
          `The maximum length of field should be ${this.errors[err].max}`
        );
      }
      if (err === 'email') {
        this.addError(
          err,
          `Fill this field in format: namesurname@example.com`
        );
      }
      if (err === 'pattern') {
        this.addError(err, `This field does not meet some requirements`);
      }
    }
  }

  addError(errorKey: string, message: string): void {
    this.displayedErrors.push({
      errorKey: errorKey,
      message: message,
    });
  }
}
