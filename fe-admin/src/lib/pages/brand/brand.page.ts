import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBrandListComponent } from '../../components/brand-list/admin-brand-list.component';
import { AdminBrandService } from '../../services/brand.service';
import {
  AdminCreateBrandDialog,
  AdminCreateBrandDialogData,
} from '../../dialogs/brand/admin-create-brand.dialog';
import { AdminDialogBackdropComponent } from '../../dialogs/layout/admin-dialog-backdrop.component';
import { Dialog } from '@angular/cdk/dialog';
import { UiButtonDirective, UiInputDirective } from '@filament-guru/fe-ui';

@Component({
  selector: 'admin-brand-page',
  standalone: true,
  imports: [
    CommonModule,
    AdminBrandListComponent,
    UiButtonDirective,
    UiInputDirective,
  ],
  templateUrl: './brand.page.html',
})
export class AdminBrandPage {
  constructor(
    private readonly brandService: AdminBrandService,
    private readonly dialog: Dialog
  ) {
    this.getManyBrands();
  }

  brands = this.brandService.brands;

  getManyBrands() {
    console.log('getManyBrands');
    this.brandService.getMany();
  }

  openCreateDialog() {
    const config: AdminCreateBrandDialogData = {
      title: 'Create Flavor Group',
    };

    const dialogRef = this.dialog.open(AdminCreateBrandDialog, {
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
      this.getManyBrands();
    });
  }
}
