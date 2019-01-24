import { ExchangeRateComponent } from './exchange-rate.component';
import { Currency } from '../currency';

describe('ExchangeRateComponent', () => {
  var component: ExchangeRateComponent;

  beforeEach(() => {
    component = new ExchangeRateComponent();
  });
  it('should be add new item into rate array', () => {
    let curr = new Currency('USD', 1, 10);
    let obj = curr.getCurrency();
    let rates = [];

    rates = component.add(rates, obj);

    expect(rates.length).toBe(1);
  });

  it('should be delete item in rate array', () => {
    let curr = new Currency('USD', 1, 10);
    let obj = curr.getCurrency();
    let rates = [obj];

    rates = component.delete(rates, obj);

    expect(rates.length).toBe(0);
  });
});
