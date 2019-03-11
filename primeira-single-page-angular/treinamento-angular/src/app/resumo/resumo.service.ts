import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ResumoService {

    constructor(private http: HttpClient) { }

    getResumo() {
        return this.http.get(environment.apiUrl + "/resumo");
    }

}
