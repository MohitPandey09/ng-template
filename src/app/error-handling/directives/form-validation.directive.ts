import { Directive, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[formValidation]',
})
export class FormValidationDirective {
  @Input()
  public formValidation: FormGroup = new FormGroup({});

  /**
   * to prevent propagation of click event if form is invalid & mark form as touched
   * @param $event
   */
  @HostListener('click', ['$event'])
  public clickAllowed($event: Event): void {
    if (this.formValidation.invalid) {
      $event.preventDefault();
      $event.stopImmediatePropagation();
      $event.stopPropagation();
      this.formValidation.markAllAsTouched();
    }
  }
}
