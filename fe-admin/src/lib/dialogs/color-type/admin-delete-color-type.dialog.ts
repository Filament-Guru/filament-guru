import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminColorTypeService } from '../../services/color-type.service';
import { UiButtonDirective } from '@filament-guru/fe-ui';

interface DeleteColorTypeDialogData {
  colorTypeId: number;
}

@Component({
  selector: 'admin-delete-color-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
  ],
  templateUrl: './admin-delete-color-type.dialog.html',
})
export class AdminDeleteColorTypeDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: DeleteColorTypeDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly colorTypeService: AdminColorTypeService
  ) {}

  deleteForm = this.formBuilder.group({});

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.colorTypeService.delete(this.data.colorTypeId).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
