import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getConsultas() {
    return this.http.get(environment.apiUrl + '/consulta')
  }

}
