import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ERROR_MESSAGES } from '../../constants/error-message.constant';
import { Errors } from '../../models/errors.interface';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnChanges {
  /**
   * Control errors
   */
  @Input() validationErrors: ValidationErrors | null | undefined;
  /**
   * Custom error message. When presented, built in errors are not displayed
   */
  @Input() customErrorMessage?: string;

  /**
   * Errors collection
   */
  public errors: Errors[] = [];

  ngOnChanges(): void {
    this.errors = [];
    if (!this.validationErrors) {
      return;
    }
    this.customErrorMessage
      ? this.addError('custom-err', this.customErrorMessage)
      : this.getValidationErrors();
  }

  getValidationErrors(): void {
    for (let err in this.validationErrors) {
      if (err === 'required') {
        this.addError(err, ERROR_MESSAGES.REQUIRED);
      }
      if (err === 'requiredTrue') {
        this.addError(err, ERROR_MESSAGES.REQUIRED_TRUE);
      }
      if (err === 'minlength') {
        this.addError(
          err,
          `${ERROR_MESSAGES.MIN_LENGTH} ${this.validationErrors[err].requiredLength}`
        );
      }
      if (err === 'maxlength') {
        this.addError(
          err,
          `${ERROR_MESSAGES.MAX_LENGTH} ${this.validationErrors[err].requiredLength}`
        );
      }
      if (err === 'min') {
        this.addError(
          err,
          `${ERROR_MESSAGES.MIN} ${this.validationErrors[err].min}`
        );
      }
      if (err === 'max') {
        this.addError(
          err,
          `${ERROR_MESSAGES.MAX} ${this.validationErrors[err].max}`
        );
      }
      if (err === 'email') {
        this.addError(err, ERROR_MESSAGES.EMAIL);
      }
      if (err === 'pattern') {
        this.addError(err, ERROR_MESSAGES.PATTERN);
      }
    }
  }

  /**
   * Adding specific error to @see{@link this.errors} collection
   * @param errorKey Error key
   * @param message Error message
   */
  addError(errorKey: string, message: string): void {
    this.errors.push({
      key: errorKey,
      message: message,
    });
  }
}
