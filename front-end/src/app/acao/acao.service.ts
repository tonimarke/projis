import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  // injeção de dependencia: chama o angular pra injetar nos parametros
  // do construtor as dependencias que precisamos na classe. Assim não 
  // precisa criar intanciar manualmente as dependencias (auto-import)
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:3000/acao').toPromise()
  }
}
