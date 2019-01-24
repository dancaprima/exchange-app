import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ICurrency } from './currency';

@Injectable()
export class ExchangeRateService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getLatest(currency: string): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>(`${this.apiUrl}/latest?base=${currency}`);
  }
}
