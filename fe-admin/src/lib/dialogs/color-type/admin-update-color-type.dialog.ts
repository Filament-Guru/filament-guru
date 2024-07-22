import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ColorType } from '../../interfaces/color-type.interface';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminColorTypeService } from '../../services/color-type.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

interface UpdateColorTypeDialogData {
  colorType: ColorType;
}

@Component({
  selector: 'admin-update-color-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-update-color-type.dialog.html',
})
export class AdminUpdateColorTypeDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: UpdateColorTypeDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly colorTypeService: AdminColorTypeService
  ) {
    this.updateColorTypeForm.setValue({
      slug: data.colorType.slug,
    });
  }

  updateColorTypeForm = this.formBuilder.group({
    slug: ['', [Validators.required, Validators.maxLength(255)]],
  });

  submit() {
    if (this.updateColorTypeForm.valid) {
      const data = {
        name: this.updateColorTypeForm.value.slug,
      };

      this.colorTypeService.update(this.data.colorType.id, data).subscribe((res) => {
        console.log('Flavor group updated', res);
        this.dialogRef.close();
      });
    }
  }
}
