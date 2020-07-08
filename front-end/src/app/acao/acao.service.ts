import { environment as env } from './../../environments/environment';
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

  private apiUri : string = env.apiBaseUri + '/acao'

  listar(){
    return this.http.get(this.apiUri).toPromise()
  }

  excluir(id: string) {
    return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
  }

  novo(body: any) {
    return this.http.post(this.apiUri, body).toPromise()
  }

  atualizar(body: any) {
    return this.http.put(this.apiUri, body).toPromise()
  }

  obterUm(id: string) {
    return this.http.get(this.apiUri + '/' + id).toPromise()
  }

}