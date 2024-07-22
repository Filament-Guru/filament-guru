import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producer } from '../../interfaces/producer.interface';
import { Dialog } from '@angular/cdk/dialog';
import { AdminUpdateProducerDialog } from '../../dialogs/producer/admin-update-producer.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { AdminDeleteProducerDialog } from '../../dialogs/producer/admin-delete-producer.dialog';
import { AdminProducerService } from '../../services/producer.service';

@Component({
  selector: 'admin-producer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-producer-list.component.html',
})
export class AdminProducerListComponent {
  constructor(
    private readonly dialog: Dialog,
    private readonly producerService: AdminProducerService
  ) {}
  producers = input<Producer[]>();

  openUpdateDialog(producer: Producer) {
    const dialogRef = this.dialog.open(AdminUpdateProducerDialog, {
      container: AdminDialogBackdropComponent,
      backdropClass: [
        'bg-gray-900',
        'bg-opacity-50',
        'dark:bg-opacity-80',
        'fixed',
        'inset-0',
        'z-50',
        'hover:cursor-pointer',
      ],
      data: {
        title: 'Update Flavor Group',
        producer,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.producerService.getMany();
    });
  }

  openDeleteDialog(producerId: number) {
    const dialogRef = this.dialog.open(AdminDeleteProducerDialog, {
      container: AdminDialogBackdropComponent,
      backdropClass: [
        'bg-gray-900',
        'bg-opacity-50',
        'dark:bg-opacity-80',
        'fixed',
        'inset-0',
        'z-50',
        'hover:cursor-pointer',
      ],
      data: {
        title: 'Delete Flavor Group',
        producerId,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.producerService.getMany();
    });
  }
}
