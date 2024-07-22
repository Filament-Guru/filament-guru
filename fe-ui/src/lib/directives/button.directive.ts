import { Directive, HostBinding, effect, input } from '@angular/core';

export type ButtonStyle = 'primary' | 'red' | 'gray';

const colors: { [key in ButtonStyle]: string } = {
  primary:
    'text-white bg-sky-700 hover:bg-sky-800 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800',
  red: 'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800',
  gray: 'text-white bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
};

@Directive({
  selector: '[uiBtn]',
  standalone: true,
})
export class UiButtonDirective {
  baseClass =
    'inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center';

  btnStyle = input<ButtonStyle>('primary');

  constructor() {
    effect(() => {
      this.class = `${this.baseClass} ${colors[this.btnStyle()]}`;
    });
  }

  @HostBinding('class')
  class!: string;
}
