import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:3000/intern').toPromise()
  }
}