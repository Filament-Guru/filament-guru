import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminFilamentTypeService } from '../../services/filament-type.service';
import { UiButtonDirective } from '@filament-guru/fe-ui';

interface DeleteFilamentTypeDialogData {
  filamentTypeId: number;
}

@Component({
  selector: 'admin-delete-filament-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
  ],
  templateUrl: './admin-delete-filament-type.dialog.html',
})
export class AdminDeleteFilamentTypeDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: DeleteFilamentTypeDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly filamentTypeService: AdminFilamentTypeService
  ) {}

  deleteForm = this.formBuilder.group({});

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.filamentTypeService.delete(this.data.filamentTypeId).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
