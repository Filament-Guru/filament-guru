import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminColorService } from '../../services/color.service';
import { UiButtonDirective } from '@filament-guru/fe-ui';

interface DeleteColorDialogData {
  colorId: number;
}

@Component({
  selector: 'admin-delete-color-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
  ],
  templateUrl: './admin-delete-color.dialog.html',
})
export class AdminDeleteColorDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: DeleteColorDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly colorService: AdminColorService
  ) {}

  deleteForm = this.formBuilder.group({});

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.colorService.delete(this.data.colorId).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
