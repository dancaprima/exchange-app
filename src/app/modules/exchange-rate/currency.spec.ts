import { Currency } from './currency';

describe('Currency', () => {
  var component: Currency;

  beforeEach(() => {
    component = new Currency('USD', 1, 1);
  });
  it('should return correct detail currency', () => {
    const USD = component.getCurrencyDetail('USD');
    const IDR = component.getCurrencyDetail('IDR');
    const EUR = component.getCurrencyDetail('EUR');
    const CAD = component.getCurrencyDetail('CAD');
    const GBP = component.getCurrencyDetail('GBP');
    const CHF = component.getCurrencyDetail('CHF');
    const SGD = component.getCurrencyDetail('SGD');
    const INR = component.getCurrencyDetail('INR');
    const MYR = component.getCurrencyDetail('MYR');
    const JPY = component.getCurrencyDetail('JPY');
    const KRW = component.getCurrencyDetail('KRW');

    expect(USD).toEqual('United States Dollar');
    expect(IDR).toEqual('Indonesian Rupiah');
    expect(EUR).toEqual('Euro');
    expect(CAD).toEqual('Canadian Dollar');
    expect(GBP).toEqual('Poundsterling');
    expect(CHF).toEqual('Swiss franc');
    expect(SGD).toEqual('Singapore Dollar');
    expect(INR).toEqual('Indian Rupee');
    expect(MYR).toEqual('Malaysian Ringgit');
    expect(JPY).toEqual('Japanese Yen');
    expect(KRW).toEqual('South Korean Won');
  });

  it('should return correct multiplication', () => {
    const x = 2;
    const y = 3;

    const val = component.calcAmount(x, y);

    expect(val).toEqual(6);
  });
});
