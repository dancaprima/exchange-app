import { ExchangeOptionComponent } from './exchange-option.component';
import { Currency } from '../../currency';

describe('ExchangeOptionComponent', () => {
  var component: ExchangeOptionComponent;

  beforeEach(() => {
    component = new ExchangeOptionComponent();
  });
  it('should raise onAddRate event when submitted', () => {

    let curr = new Currency('USD', 1, 10);
    let obj = curr.getCurrency();
    let newEl
    component.onAddRate.subscribe(d => newEl = d)
    component.submit();

    expect(newEl).not.toBeNull()
    //reset option
    expect(component.rateOpt).toBeNull()
    expect(component.isForm).toBeFalsy()
  });
});
