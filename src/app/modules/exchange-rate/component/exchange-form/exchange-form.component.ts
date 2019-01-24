import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'exchange-form',
  templateUrl: './exchange-form.component.html'
})
export class ExchangeFormComponent {
  @Input() amount;
  @Output() changeInput = new EventEmitter();

  inputChange(event) {
    this.changeInput.emit(event);
  }

  onKey(event) {
    const key = event.which || event.keyCode || 0;
    if (key !== 46 && key > 31 && (key < 48 || key > 57)) {
      return false;
    }
  }
}
