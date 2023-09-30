import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  private dialog: MatDialog = inject(MatDialog);

  /**
   * to open confirmation dialog modal
   * @param title
   * @param message
   * @param confirmBtn
   * @param cancelBtn
   */
  public open(
    title: string,
    message: string,
    confirmBtn = 'Confirm',
    cancelBtn = 'Cancel',
  ): MatDialogRef<ConfirmationDialogComponent, boolean> {
    const dialogRef: MatDialogRef<ConfirmationDialogComponent, boolean> =
      this.dialog.open(ConfirmationDialogComponent);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    dialogRef.componentInstance.confirmBtn = confirmBtn;
    dialogRef.componentInstance.cancelBtn = cancelBtn;

    return dialogRef;
  }
}
