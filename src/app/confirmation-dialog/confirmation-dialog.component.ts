import { Component, Input } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-confirmation-dialog',
  template: `
    <h1 mat-dialog-title>{{ title }}</h1>
    <div mat-dialog-content>{{ message }}</div>
    <div mat-dialog-actions>
      <button
        mat-button
        mat-dialog-close
        type="button"
        (click)="dialogRef.close(false)"
      >
        {{ cancelBtn }}
      </button>
      <button
        mat-button
        mat-dialog-close
        type="button"
        (click)="dialogRef.close(true)"
      >
        {{ confirmBtn }}
      </button>
    </div>
  `,
  styles: [],
  imports: [MatDialogModule, MatButtonModule],
})
export class ConfirmationDialogComponent {
  @Input({ required: true })
  public title = 'Delete';

  @Input({ required: true })
  public message = 'Are you sure you want to delete?';

  @Input()
  public confirmBtn = 'Confirm';

  @Input()
  public cancelBtn = 'Cancel';

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean>,
  ) {}
}
