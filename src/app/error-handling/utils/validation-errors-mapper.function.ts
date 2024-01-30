import { ContainErrors } from './validation-error.interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * maps 422 validation errors or reset if empty
 * @param obj
 */
export function validationErrorsMapper<T>(obj: ContainErrors) {
  return (source: Observable<T>): Observable<T> => {
    return source
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => {
          if (errorResponse.status === 422) {
            obj.validationErrors = errorResponse.error.errors;
          }
          return throwError(() => errorResponse);
        }),
      )
      .pipe(tap(() => (obj.validationErrors = {})));
  };
}
