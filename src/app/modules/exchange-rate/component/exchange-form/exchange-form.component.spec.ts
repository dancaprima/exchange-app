import { ExchangeFormComponent } from './exchange-form.component';
import { Currency } from '../../currency';

describe('ExchangeFormComponent', () => {
  var component: ExchangeFormComponent;

  beforeEach(() => {
    component = new ExchangeFormComponent();
  });
  it('should raise inputChange event when input has changed', () => {
    let amount;

    component.amount = 250
    component.changeInput.subscribe(d => (amount = d));
    component.inputChange(component.amount);

    expect(amount).toEqual(component.amount);
  });
});
