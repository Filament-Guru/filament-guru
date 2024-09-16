import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FilamentType } from '../../interfaces/filament-type.interface';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminFilamentTypeService } from '../../services/filament-type.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface UpdateFilamentTypeDialogData {
  filamentType: FilamentType;
}

@Component({
  selector: 'admin-update-filament-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-update-filament-type.dialog.html',
})
export class AdminUpdateFilamentTypeDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: UpdateFilamentTypeDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly filamentTypeService: AdminFilamentTypeService
  ) {
    this.updateFilamentTypeForm.setValue({
      slug: data.filamentType.slug,
    });
  }

  updateFilamentTypeForm = this.formBuilder.group({
    slug: ['', [Validators.required, Validators.maxLength(255)]],
  });

  submit() {
    if (this.updateFilamentTypeForm.valid) {
      const data = {
        name: this.updateFilamentTypeForm.value.slug,
      };

      this.filamentTypeService.update(this.data.filamentType.id, data).subscribe((res) => {
        console.log('Flavor group updated', res);
        this.dialogRef.close();
      });
    }
  }
}
