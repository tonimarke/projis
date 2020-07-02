import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:3000/acao').toPromise()
  }
}
