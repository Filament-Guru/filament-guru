import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProducerListComponent } from '../../components/producer-list/admin-producer-list.component';
import { AdminProducerService } from '../../services/producer.service';
import {
  AdminCreateProducerDialog,
  AdminCreateProducerDialogData,
} from '../../dialogs/producer/admin-create-producer.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { Dialog } from '@angular/cdk/dialog';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

@Component({
  selector: 'admin-producer-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminProducerListComponent,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './producer.page.html',
})
export class AdminProducerPage {
  constructor(
    private readonly producerService: AdminProducerService,
    private readonly dialog: Dialog
  ) {
    this.getManyProducers();
  }

  producers = this.producerService.producers;

  getManyProducers() {
    console.log('getManyProducers');
    this.producerService.getMany();
  }

  openCreateDialog() {
    const config: AdminCreateProducerDialogData = {
      title: 'Create Flavor Group',
    };

    const dialogRef = this.dialog.open(AdminCreateProducerDialog, {
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
      data: config,
    });

    dialogRef.closed.subscribe(() => {
      this.getManyProducers();
    });
  }
}
