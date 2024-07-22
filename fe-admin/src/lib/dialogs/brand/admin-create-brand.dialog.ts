import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { AdminBrandService } from '../../services/brand.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface AdminCreateBrandDialogData extends DialogConfig {
  title: string;
}

@Component({
  selector: 'admin-create-brand-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-create-brand.dialog.html',
})
export class AdminCreateBrandDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private brandService: AdminBrandService,
    private dialogRef: DialogRef
  ) {}

  createBrandForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(255)]],
    url: [
      '',
      [
        Validators.required,
        Validators.maxLength(255),
        Validators.pattern('https?://.+'),
      ],
    ],
  });

  submit() {
    if (this.createBrandForm.valid) {
      const data = {
        name: this.createBrandForm.value.name,
        url: this.createBrandForm.value.url,
      };

      this.brandService.create(data).subscribe((res) => {
        console.log('Brand created', res);
        this.dialogRef.close();
      });
    }
  }
}
