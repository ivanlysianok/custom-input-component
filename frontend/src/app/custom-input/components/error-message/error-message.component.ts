import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Errors } from '../../models/errors.interface';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnChanges {
  @Input() validationErrors: ValidationErrors | null | undefined;

  public errors: Errors[] = [];

  ngOnChanges(): void {
    this.errors = [];
    if (!this.validationErrors) {
      return;
    }
    for (let err in this.validationErrors) {
      if (err === 'required') {
        this.addError(err, `This field is required`);
      }
      if (err === 'requiredTrue') {
        this.addError(err, `This field requires true value`);
      }
      if (err === 'minlength') {
        this.addError(
          err,
          `The minimum length of field should be ${this.validationErrors[err].requiredLength}`
        );
      }
      if (err === 'maxlength') {
        this.addError(
          err,
          `The maximum length of field should be ${this.validationErrors[err].requiredLength}`
        );
      }
      if (err === 'min') {
        this.addError(
          err,
          `The minimum length of field should be ${this.validationErrors[err].min}`
        );
      }
      if (err === 'max') {
        this.addError(
          err,
          `The maximum length of field should be ${this.validationErrors[err].max}`
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
    this.errors.push({
      key: errorKey,
      message: message,
    });
  }
}
