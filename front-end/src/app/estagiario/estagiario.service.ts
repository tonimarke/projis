import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstagiarioService {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:3000/estagiario').toPromise()
  }

  excluir(id: string) {
    return this.http.request('DELETE', 'http://localhost:3000/estagiario', { body: {_id: id}}).toPromise()
  }

  novo(estagiario: any) {
    return this.http.post('http://localhost:3000/estagiario', estagiario).toPromise()
  }

  atualizar(body: any){
    return this.http.put('http://localhost:3000/estagiario', body).toPromise()
  }
}
