import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { AdminColorService } from '../../services/color.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface AdminCreateColorDialogData extends DialogConfig {
  title: string;
}

@Component({
  selector: 'admin-create-color-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-create-color.dialog.html',
})
export class AdminCreateColorDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private colorService: AdminColorService,
    private dialogRef: DialogRef
  ) {}

  createColorForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
  });

  submit() {
    if (this.createColorForm.valid) {
      const data = {
        name: this.createColorForm.value.name,
      };

      this.colorService.create(data).subscribe((res) => {
        console.log('Color created', res);
        this.dialogRef.close();
      });
    }
  }
}
