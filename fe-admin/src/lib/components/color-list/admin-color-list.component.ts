import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Color } from '../../interfaces/color.interface';
import { Dialog } from '@angular/cdk/dialog';
import { AdminUpdateColorDialog } from '../../dialogs/color/admin-update-color.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { AdminDeleteColorDialog } from '../../dialogs/color/admin-delete-color.dialog';
import { AdminColorService } from '../../services/color.service';

@Component({
  selector: 'admin-color-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-color-list.component.html',
})
export class AdminColorListComponent {
  constructor(
    private readonly dialog: Dialog,
    private readonly colorService: AdminColorService
  ) {}
  colors = input<Color[]>();

  openUpdateDialog(color: Color) {
    const dialogRef = this.dialog.open(AdminUpdateColorDialog, {
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
        color,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.colorService.getMany();
    });
  }

  openDeleteDialog(colorId: number) {
    const dialogRef = this.dialog.open(AdminDeleteColorDialog, {
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
        colorId,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.colorService.getMany();
    });
  }
}
