import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyformartter',
  templateUrl: './currencyformartter.component.html',
  styleUrl: './currencyformartter.component.css'
})
export class CurrencyformartterComponent {
  numberInput: number = 0;
  currencyCode: string = 'USD'; // Default to USD
  formattedCurrency: string | null = null;

  // @ts-ignore
  constructor(private numberFormat: NumberFormat) {}

  formatCurrency() {
    const formatter = this.numberFormat.formatCurrency(this.numberInput, this.currencyCode, 'en-US');
    this.formattedCurrency = formatter;
  }
}
