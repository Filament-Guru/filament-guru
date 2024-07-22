import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Brand } from '../../interfaces/brand.interface';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminBrandService } from '../../services/brand.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

interface UpdateBrandDialogData {
  brand: Brand;
}

@Component({
  selector: 'admin-update-brand-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-update-brand.dialog.html',
})
export class AdminUpdateBrandDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: UpdateBrandDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly brandService: AdminBrandService
  ) {
    this.updateBrandForm.setValue({
      name: data.brand.name,
      url: data.brand.url,
    });
  }

  updateBrandForm = this.formBuilder.group({
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
    if (this.updateBrandForm.valid) {
      const data = {
        name: this.updateBrandForm.value.name,
        url: this.updateBrandForm.value.url,
      };

      this.brandService.update(this.data.brand.id, data).subscribe((res) => {
        console.log('Flavor group updated', res);
        this.dialogRef.close();
      });
    }
  }
}
