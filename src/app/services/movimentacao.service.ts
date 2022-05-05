import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(`${baseUrl}/movimentacoes`);
  }

  buscarPorIdConta(idConta:any): Observable<any>{
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }

  salvarMovimentacao(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
  }
}
