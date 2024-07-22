import { Component, Inject, effect, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

interface DialogData {
  title: string;
}

type DialogSize = 'sm' | 'md' | 'lg' | 'xl';

const DialogSizeMap: {[key in DialogSize]: string} = {
  sm: 'max-w-xs',
  md: 'max-w-2xl',
  lg: 'max-w-5xl',
  xl: 'max-w-full',
};

@Component({
  selector: 'admin-dialog-shell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dialog.shell.html',
})
export class AdminDialogShell {

  constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) public data: DialogData) {
    effect(() => {
      const currentSize = this.size();
      this.currentSizeClass.update(() => DialogSizeMap[currentSize] || DialogSizeMap['md']);
      console.log('AdminDialogShell', this.data, currentSize);
    }, {allowSignalWrites: true});
  }

  currentSizeClass = signal<string>('max-w-2xl');
  size = input<DialogSize>('md')
}
