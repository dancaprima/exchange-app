import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';
import { ICurrency, Currency } from '../currency';

@Component({
  selector: 'exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  initialCurr: string = 'USD';
  rates: ICurrency[] = [];
  loading: boolean;
  amount: number = 10.0;
  initialListCurr: string[] = ['IDR', 'EUR', 'GBP', 'SGD'];
  supportedCurr: string[] = [
    'USD',
    'IDR',
    'EUR',
    'CAD',
    'GBP',
    'CHF',
    'SGD',
    'INR',
    'MYR',
    'JPY',
    'KRW'
  ];
  options: any[] = [];

  constructor(private _exchangeRateService?: ExchangeRateService) {}

  ngOnInit() {
    this.loading = true;
    this.supportedCurr = this.supportedCurr.filter(
      v => !this.initialListCurr.includes(v)
    );

    this._exchangeRateService.getLatest(this.initialCurr).subscribe(
      res => {
        let data = res['rates'];
        Object.keys(data).map(key => {
          let obj = {
            currency: key,
            exchangeRate: data[key]
          };
          if (this.initialListCurr.includes(key))
            return (this.rates = this.add(this.rates, obj));

          if (this.supportedCurr.includes(key))
            return (this.options = this.add(this.options, obj));
        });
      },
      err => {
        alert('Terjadi kesalahan');
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  addRateList(event) {
    this.rates = this.add(this.rates, event);
    this.options = this.delete(this.options, event);
  }

  deleteRateList(event) {
    this.rates = this.delete(this.rates, event);
    this.options = this.add(this.options, event);
  }

  add(array, elm) {
    let curr = new Currency(elm.currency, elm.exchangeRate, this.amount);
    let newEl = curr.getCurrency();
    return [...array, newEl];
  }

  delete(array, elm) {
    return array.filter(el => el !== elm);
  }

  onChangeInput(event) {
    this.amount = event;
    this.rates = this.rates.map((e, i) => {
      let curr = new Currency(e.currency, e.exchangeRate, this.amount);
      let newVal = curr.getCurrency();
      return newVal;
    });
  }
}
