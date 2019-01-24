import { ExchangeListComponent } from './exchange-list.component';
import { Currency } from '../../currency';

describe('ExchangeListComponent', () => {
  var component: ExchangeListComponent;

  beforeEach(() => {
    component = new ExchangeListComponent();
  });
  it('should raise onDeleteRate event when deleted', () => {
    let curr = new Currency('USD', 1, 10);
    let obj = curr.getCurrency();
    let deletedEl;

    component.onDeleteRate.subscribe(d => (deletedEl = d));
    component.delete(obj);

    expect(obj).toEqual(deletedEl);
  });
});
