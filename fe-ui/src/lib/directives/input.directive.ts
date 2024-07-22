import { Directive, HostBinding, effect, input } from '@angular/core';

export type InputStates = 'neutral' | 'success' | 'warning' | 'error';

const colors: { [key in InputStates]: string } = {
  neutral:
    'bg-gray-50 border-gray-300 text-gray-900 focus:ring-sky-600 focus:border-sky-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500',
  success:
    'bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500',
  warning:
    'bg-orange-50 border-orange-500 text-orange-900 dark:text-orange-400 placeholder-orange-700 dark:placeholder-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-orange-500',
  error:
    'bg-red-50 border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-red-500',
};

@Directive({
  selector: '[uiInput]',
  standalone: true,
})
export class UiInputDirective {
  baseClass = 'border text-sm rounded-lg block w-full p-2.5';

  constructor() {
    this.class = this.baseClass;

    effect(() => {
      this.class = `${this.baseClass} ${colors[this.inputState()]}`;
      this.class += this.hasIcon() ? ' pl-10' : '';
    });
  }

  inputState = input<InputStates>('neutral');
  hasIcon = input<boolean>(false);

  @HostBinding('class')
  class!: string;
}
