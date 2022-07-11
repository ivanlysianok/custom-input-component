import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { BuiltInErrorsCollection } from '../constants/built-in-errors.constant';
import { ErrorMessage } from '../models/error-message.interface';

@Component({
  selector: 'error-control',
  templateUrl: './error-control.component.html',
  styleUrls: ['./error-control.component.scss'],
})
export class ErrorControlComponent implements OnChanges {
  @Input() errors: ValidationErrors | null | undefined;
  public controlErrorsCollection: ErrorMessage[] = [];

  ngOnChanges(): void {
    this.controlErrorsCollection = [];
    if (!this.errors) {
      return;
    }
    const errorKeys = Object.keys(this.errors);
    BuiltInErrorsCollection.forEach((item) => {
      if (errorKeys.includes(item.errorKey)) {
        this.controlErrorsCollection.push(item);
      }
    });
  }
}
