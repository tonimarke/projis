import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PcontrariaService {

  constructor(private http: HttpClient) { }

  private apiUrl : string = env.apiBaseUri + '/pcontraria'

  listar(){
    return this.http.get(this.apiUrl).toPromise()
  }

  excluir(id: string) {
    return this.http.request('DELETE', this.apiUrl, {body: {_id: id}}).toPromise()
  }

  novo(body: any) {
    return this.http.post(this.apiUrl, body).toPromise()
  }

  atualizar(body: any) {
    return this.http.put(this.apiUrl, body).toPromise()
  }

  obterUm(id: string) {
    return this.http.get(this.apiUrl + '/' + id).toPromise()
  }

}
