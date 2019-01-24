export interface ICurrency {
  currency: string;
  exchangeRate: number;
  rate: number;
  currencyDetail: string;
}

export class Currency {
  private currency: string;
  private exchangeRate: number;
  private amount: number;

  constructor(currency: string, exchangeRate: number, amount: number) {
    this.currency = currency;
    this.exchangeRate = exchangeRate;
    this.amount = amount;
  }

  calcAmount(rate, amount): number {
    return rate * amount;
  }

  getCurrencyDetail(currency): string {
    let detail;
    switch (currency) {
      case 'USD':
        detail = 'United States Dollar';
        break;
      case 'EUR':
        detail = 'Euro';
        break;
      case 'IDR':
        detail = 'Indonesian Rupiah';
        break;
      case 'CAD':
        detail = 'Canadian Dollar';
        break;
      case 'GBP':
        detail = 'Poundsterling';
        break;
      case 'INR':
        detail = 'Indian Rupee';
        break;
      case 'SGD':
        detail = 'Singapore Dollar';
        break;
      case 'CHF':
        detail = 'Swiss franc';
        break;
      case 'MYR':
        detail = 'Malaysian Ringgit';
        break;
      case 'JPY':
        detail = 'Japanese Yen';
        break;
      case 'KRW':
        detail = 'South Korean Won';
        break;
      default:
        detail = ' ';
        break;
    }
    return detail;
  }

  getCurrency(): ICurrency {
    return {
      currency: this.currency,
      exchangeRate: this.exchangeRate,
      rate: this.calcAmount(this.exchangeRate, this.amount),
      currencyDetail: this.getCurrencyDetail(this.currency)
    };
  }
}
