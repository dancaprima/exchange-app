import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICurrency } from '../../currency';

@Component({
  selector: 'exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css'],
})
export class ExchangeListComponent {
  @Input() item: ICurrency;
  @Output() onDeleteRate = new EventEmitter();

  delete(element){
    this.onDeleteRate.emit(element)
  }
}
