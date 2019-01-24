import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICurrency } from '../../currency';

@Component({
  selector: 'exchange-option',
  templateUrl: './exchange-option.component.html',
  styleUrls: ['./exchange-option.component.css']
})
export class ExchangeOptionComponent {
  rateOpt: ICurrency = null;
  isForm: boolean;
  @Input() options: ICurrency[];
  @Output() onAddRate = new EventEmitter();

  submit() {
    if (this.rateOpt == null) return;
    this.onAddRate.emit(this.rateOpt);
    this.rateOpt = null;
    this.isForm = false;
  }
}
