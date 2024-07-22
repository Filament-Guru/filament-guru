import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilamentType } from '../../interfaces/filament-type.interface';
import { Dialog } from '@angular/cdk/dialog';
import { AdminUpdateFilamentTypeDialog } from '../../dialogs/filament-type/admin-update-filament-type.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { AdminDeleteFilamentTypeDialog } from '../../dialogs/filament-type/admin-delete-filament-type.dialog';
import { AdminFilamentTypeService } from '../../services/filament-type.service';

@Component({
  selector: 'admin-filament-type-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-filament-type-list.component.html',
})
export class AdminFilamentTypeListComponent {
  constructor(
    private readonly dialog: Dialog,
    private readonly filamentService: AdminFilamentTypeService
  ) {}
  filamentTypes = input<FilamentType[]>();

  openUpdateDialog(filamentType: FilamentType) {
    const dialogRef = this.dialog.open(AdminUpdateFilamentTypeDialog, {
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
        filamentType,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.filamentService.getMany();
    });
  }

  openDeleteDialog(filamentTypeId: number) {
    const dialogRef = this.dialog.open(AdminDeleteFilamentTypeDialog, {
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
        filamentTypeId,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.filamentService.getMany();
    });
  }
}
