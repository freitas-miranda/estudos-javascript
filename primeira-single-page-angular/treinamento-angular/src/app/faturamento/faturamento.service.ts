import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class FaturamentoService {

  constructor(private http: HttpClient) { }

  getFaturamento() {
    return this.http.get(environment.apiUrl + '/faturamento');
  }

}
