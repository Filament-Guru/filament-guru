import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFilamentTypeListComponent } from '../../components/filament-type-list/admin-filament-type-list.component';
import { AdminFilamentTypeService } from '../../services/filament-type.service';
import {
  AdminCreateFilamentTypeDialog,
  AdminCreateFilamentTypeDialogData,
} from '../../dialogs/filament-type/admin-create-filament-type.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { Dialog } from '@angular/cdk/dialog';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

@Component({
  selector: 'admin-filament-type-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminFilamentTypeListComponent,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './filament-type.page.html',
})
export class AdminFilamentTypePage {
  constructor(
    private readonly filamentTypeService: AdminFilamentTypeService,
    private readonly dialog: Dialog
  ) {
    this.getManyFilamentTypes();
  }

  filamentTypes = this.filamentTypeService.filamentTypes;

  getManyFilamentTypes() {
    console.log('getManyFilamentTypes');
    this.filamentTypeService.getMany();
  }

  openCreateDialog() {
    const config: AdminCreateFilamentTypeDialogData = {
      title: 'Create Flavor Group',
    };

    const dialogRef = this.dialog.open(AdminCreateFilamentTypeDialog, {
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
      this.getManyFilamentTypes();
    });
  }
}
