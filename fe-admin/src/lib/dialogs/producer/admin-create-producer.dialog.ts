import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { AdminProducerService } from '../../services/producer.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface AdminCreateProducerDialogData extends DialogConfig {
  title: string;
}

@Component({
  selector: 'admin-create-producer-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-create-producer.dialog.html',
})
export class AdminCreateProducerDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private producerService: AdminProducerService,
    private dialogRef: DialogRef
  ) {}

  createProducerForm = this.formBuilder.group({
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
    if (this.createProducerForm.valid) {
      const data = {
        name: this.createProducerForm.value.name,
        url: this.createProducerForm.value.url,
      };

      this.producerService.create(data).subscribe((res) => {
        console.log('Producer created', res);
        this.dialogRef.close();
      });
    }
  }
}
