import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminColorListComponent } from '../../components/color-list/admin-color-list.component';
import { AdminColorService } from '../../services/color.service';
import {
  AdminCreateColorDialog,
  AdminCreateColorDialogData,
} from '../../dialogs/color/admin-create-color.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { Dialog } from '@angular/cdk/dialog';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

@Component({
  selector: 'admin-color-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminColorListComponent,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './color.page.html',
})
export class AdminColorPage {
  constructor(
    private readonly colorService: AdminColorService,
    private readonly dialog: Dialog
  ) {
    this.getManyColors();
  }

  colors = this.colorService.colors;

  getManyColors() {
    console.log('getManyColors');
    this.colorService.getMany();
  }

  openCreateDialog() {
    const config: AdminCreateColorDialogData = {
      title: 'Create Flavor Group',
    };

    const dialogRef = this.dialog.open(AdminCreateColorDialog, {
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
      this.getManyColors();
    });
  }
}
