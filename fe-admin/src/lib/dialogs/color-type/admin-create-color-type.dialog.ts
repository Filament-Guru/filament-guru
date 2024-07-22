import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { AdminColorTypeService } from '../../services/color-type.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface AdminCreateColorTypeDialogData extends DialogConfig {
  title: string;
}

@Component({
  selector: 'admin-create-color-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-create-color-type.dialog.html',
})
export class AdminCreateColorTypeDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private colorTypeService: AdminColorTypeService,
    private dialogRef: DialogRef
  ) {}

  createColorTypeForm = this.formBuilder.group({
    slug: ['', [Validators.required, Validators.maxLength(255)]],
  });

  submit() {
    if (this.createColorTypeForm.valid) {
      const data = {
        name: this.createColorTypeForm.value.slug,
      };

      this.colorTypeService.create(data).subscribe((res) => {
        console.log('Color type created', res);
        this.dialogRef.close();
      });
    }
  }
}
