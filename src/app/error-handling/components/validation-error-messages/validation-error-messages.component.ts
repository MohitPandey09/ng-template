import { Component, Input } from '@angular/core';
import {
  ContainErrors,
  ValidationErrors,
} from '../../utils/validation-error.interface';

@Component({
  selector: 'app-validation-error-messages',
  templateUrl: './validation-error-messages.component.html',
  styleUrls: ['./validation-error-messages.component.scss'],
})
export class ValidationErrorMessagesComponent implements ContainErrors {
  @Input({ required: true })
  validationErrors!: ValidationErrors;

  /**
   * to get all errors
   */
  public get errors(): string[] {
    let errors: string[] = [];

    for (const key in this.validationErrors) {
      if (Object.prototype.hasOwnProperty.call(this.validationErrors, key)) {
        errors = errors.concat(this.validationErrors[key]);
      }
    }

    return errors;
  }
}
