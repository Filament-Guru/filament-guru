import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { AdminFilamentTypeService } from '../../services/filament-type.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface AdminCreateFilamentTypeDialogData extends DialogConfig {
  title: string;
}

@Component({
  selector: 'admin-create-filament-type-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-create-filament-type.dialog.html',
})
export class AdminCreateFilamentTypeDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private filamentTypeService: AdminFilamentTypeService,
    private dialogRef: DialogRef
  ) {}

  createFilamentTypeForm = this.formBuilder.group({
    slug: ['', [Validators.required, Validators.maxLength(255)]],
  });

  submit() {
    if (this.createFilamentTypeForm.valid) {
      const data = {
        name: this.createFilamentTypeForm.value.slug,
      };

      this.filamentTypeService.create(data).subscribe((res) => {
        console.log('Filament type created', res);
        this.dialogRef.close();
      });
    }
  }
}
