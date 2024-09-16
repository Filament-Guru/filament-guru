import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Producer } from '../../interfaces/producer.interface';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminProducerService } from '../../services/producer.service';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

export interface UpdateProducerDialogData {
  producer: Producer;
}

@Component({
  selector: 'admin-update-producer-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './admin-update-producer.dialog.html',
})
export class AdminUpdateProducerDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: UpdateProducerDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly producerService: AdminProducerService
  ) {
    this.updateProducerForm.setValue({
      name: data.producer.name,
      url: data.producer.url,
    });
  }

  updateProducerForm = this.formBuilder.group({
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
    if (this.updateProducerForm.valid) {
      const data = {
        name: this.updateProducerForm.value.name,
        url: this.updateProducerForm.value.url,
      };

      this.producerService.update(this.data.producer.id, data).subscribe((res) => {
        console.log('Flavor group updated', res);
        this.dialogRef.close();
      });
    }
  }
}
