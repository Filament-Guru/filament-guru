import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { CdkDialogContainer } from '@angular/cdk/dialog';

@Component({
  selector: 'admin-dialog-backdrop',
  standalone: true,
  imports: [CommonModule, CdkPortalOutlet],
  template: `<ng-template cdkPortalOutlet />`,
})
export class AdminDialogBackdropComponent extends CdkDialogContainer {}
