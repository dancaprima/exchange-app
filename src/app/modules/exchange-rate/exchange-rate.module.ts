import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExchangeRateComponent } from './pages/exchange-rate.component';
import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeListComponent } from './component/exchange-list/exchange-list.component';
import { ExchangeFormComponent } from './component/exchange-form/exchange-form.component';
import { ExchangeOptionComponent } from './component/exchange-option/exchange-option.component';

@NgModule({
  declarations: [
    ExchangeRateComponent,
    ExchangeListComponent,
    ExchangeFormComponent,
    ExchangeOptionComponent,
  ],
  imports: [CommonModule, ExchangeRateRoutingModule, HttpClientModule, FormsModule],
  providers: [ExchangeRateService]
})
export class ExchangeRateModule {}
