import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDialogShell } from '../layout/admin-dialog.shell';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminProducerService } from '../../services/producer.service';
import { UiButtonDirective } from '@filament-guru/fe-ui';

interface DeleteProducerDialogData {
  producerId: number;
}

@Component({
  selector: 'admin-delete-producer-dialog',
  standalone: true,
  imports: [
    CommonModule,
    AdminDialogShell,
    ReactiveFormsModule,
    UiButtonDirective,
  ],
  templateUrl: './admin-delete-producer.dialog.html',
})
export class AdminDeleteProducerDialog {
  constructor(
    @Inject(DIALOG_DATA) public data: DeleteProducerDialogData,
    private readonly dialogRef: DialogRef,
    private readonly formBuilder: FormBuilder,
    private readonly producerService: AdminProducerService
  ) {}

  deleteForm = this.formBuilder.group({});

  close() {
    this.dialogRef.close();
  }

  submit() {
    this.producerService.delete(this.data.producerId).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
