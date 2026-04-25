import { CurrencyPipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inr',
  standalone: true
})
export class InrCurrencyPipe implements PipeTransform {

  private currencyPipe = inject(CurrencyPipe);

  transform(value: string | number | null | undefined): string | null {
    if (value === null || value === undefined) return null;
    return this.currencyPipe.transform(value, 'INR', 'symbol', '1.2-2', 'en-IN');
  }

}
