import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brand } from '../../interfaces/brand.interface';
import { Dialog } from '@angular/cdk/dialog';
import { AdminUpdateBrandDialog } from '../../dialogs/brand/admin-update-brand.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { AdminDeleteBrandDialog } from '../../dialogs/brand/admin-delete-brand.dialog';
import { AdminBrandService } from '../../services/brand.service';

@Component({
  selector: 'admin-brand-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-brand-list.component.html',
})
export class AdminBrandListComponent {
  constructor(
    private readonly dialog: Dialog,
    private readonly brandService: AdminBrandService
  ) {}
  brands = input<Brand[]>();

  openUpdateDialog(brand: Brand) {
    const dialogRef = this.dialog.open(AdminUpdateBrandDialog, {
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
        brand,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.brandService.getMany();
    });
  }

  openDeleteDialog(brandId: number) {
    const dialogRef = this.dialog.open(AdminDeleteBrandDialog, {
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
        brandId,
      },
    });

    dialogRef.closed.subscribe(() => {
      this.brandService.getMany();
    });
  }
}
