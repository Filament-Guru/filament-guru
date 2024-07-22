import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminColorTypeListComponent } from '../../components/color-type-list/admin-color-type-list.component';
import { AdminColorTypeService } from '../../services/color-type.service';
import {
  AdminCreateColorTypeDialog,
  AdminCreateColorTypeDialogData,
} from '../../dialogs/color-type/admin-create-color-type.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { Dialog } from '@angular/cdk/dialog';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

@Component({
  selector: 'admin-color-type-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminColorTypeListComponent,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './color-type.page.html',
})
export class AdminColorTypePage {
  constructor(
    private readonly colorTypeService: AdminColorTypeService,
    private readonly dialog: Dialog
  ) {
    this.getManyColorTypes();
  }

  colorTypes = this.colorTypeService.colorTypes;

  getManyColorTypes() {
    console.log('getManyColorTypes');
    this.colorTypeService.getMany();
  }

  openCreateDialog() {
    const config: AdminCreateColorTypeDialogData = {
      title: 'Create Flavor Group',
    };

    const dialogRef = this.dialog.open(AdminCreateColorTypeDialog, {
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
      this.getManyColorTypes();
    });
  }
}
