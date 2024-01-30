import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ErrorKeysMap } from '../../utils/error-keys-map.enum';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss'],
})
export class ErrorInputComponent {
  @Input({ required: true })
  public control: AbstractControl | null = null;

  @Input()
  public only: string[] = [];

  /**
   * returns the first error message mapped to control
   */
  public get errorMessage(): string {
    if (!this.control) {
      return '';
    }

    const errors = this.control.errors;

    if (errors === null) {
      return '';
    }

    const keys: string[] = errors ? Object.keys(errors) : [];

    for (const errorKey of keys) {
      switch (errorKey) {
        case ErrorKeysMap.Required:
          return 'The field is required';

        case ErrorKeysMap.Min:
          return `The field can only have a minimum value of ${
            errors[ErrorKeysMap.Min].min
          }`;

        case ErrorKeysMap.MinLength:
          return `The filed must be at least ${
            errors[ErrorKeysMap.MinLength].requiredLength
          } characters`;

        case ErrorKeysMap.Max:
          return `The field can only have maximum value of ${
            errors[ErrorKeysMap.Max].max
          }`;

        case ErrorKeysMap.MaxLength:
          return `The field can only have maximum ${
            errors[ErrorKeysMap.MaxLength].requiredLength
          } characters`;

        case ErrorKeysMap.Email:
          return `The email is not a valid email format`;

        case ErrorKeysMap.Pattern:
          return `The input pattern provided is invalid`;

        case ErrorKeysMap.WhiteSpace:
          return `The white space not allowed`;
      }
    }

    return 'The field has incorrect value';
  }

  public get skip(): boolean {
    if (!this.control) {
      return false;
    }

    const keys: string[] =
      this.control.errors !== null ? Object.keys(this.control.errors) : [];

    if (this.only.length === 0) {
      return false;
    }

    for (const errorKey of keys) {
      if (this.only.includes(errorKey)) {
        return false;
      }
    }

    return true;
  }

  /**
   * returns true if control is both (invalid, touch) and skipped
   */
  public get hasError(): boolean {
    return !!this.control?.invalid && !!this.control?.touched && !this.skip;
  }
}
