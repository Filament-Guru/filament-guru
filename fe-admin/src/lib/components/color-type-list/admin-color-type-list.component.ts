import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorType } from '../../interfaces/color-type.interface';
import { Dialog } from '@angular/cdk/dialog';
import { AdminUpdateColorTypeDialog } from '../../dialogs/color-type/admin-update-color-type.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { AdminDeleteColorTypeDialog } from '../../dialogs/color-type/admin-delete-color-type.dialog';
import { AdminColorTypeService } from '../../services/color-type.service';

@Component({
  selector: 'admin-color-type-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-color-type-list.component.html',
})
export class AdminColorTypeListComponent {
  constructor(
    private readonly dialog: Dialog,
    private readonly colorTypeService: AdminColorTypeService
  ) {}
  colorTypes = input<ColorType[]>();

  openUpdateDialog(colorType: ColorType) {
    const dialogRef = this.dialog.open(AdminUpdateColorTypeDialog, {
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
        colorType,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.colorTypeService.getMany();
    });
  }

  openDeleteDialog(colorTypeId: number) {
    const dialogRef = this.dialog.open(AdminDeleteColorTypeDialog, {
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
        colorTypeId,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.colorTypeService.getMany();
    });
  }
}
