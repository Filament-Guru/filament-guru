import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Color } from '../../interfaces/color.interface';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminColorService } from '../../services/color.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface UpdateColorDialogData {
  color: Color;
}

@Component({
  selector: 'admin-update-color-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-update-color.dialog.html',
})
export class AdminUpdateColorDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: UpdateColorDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly colorService: AdminColorService
  ) {
    this.updateColorForm.setValue({
      name: data.color.name,
    });
  }

  updateColorForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
  });

  submit() {
    if (this.updateColorForm.valid) {
      const data = {
        name: this.updateColorForm.value.name,
      };

      this.colorService.update(this.data.color.id, data).subscribe((res) => {
        console.log('Flavor group updated', res);
        this.dialogRef.close();
      });
    }
  }
}
