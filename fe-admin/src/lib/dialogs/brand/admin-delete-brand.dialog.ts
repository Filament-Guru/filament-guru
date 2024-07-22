import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminBrandService } from '../../services/brand.service';
import { UiButtonDirective } from '@filament-guru/fe-ui';

interface DeleteBrandDialogData {
  brandId: number;
}

@Component({
  selector: 'admin-delete-brand-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
  ],
  templateUrl: './admin-delete-brand.dialog.html',
})
export class AdminDeleteBrandDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: DeleteBrandDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly brandService: AdminBrandService
  ) {}

  deleteForm = this.formBuilder.group({});

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.brandService.delete(this.data.brandId).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
