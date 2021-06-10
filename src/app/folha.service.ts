import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Folha } from './folha';


@Injectable({
  providedIn: 'root'
})
export class FolhaService {

  url = 'http://localhost:4600/folha'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os carros
  getAll(): Observable<Folha[]> {
    return this.httpClient.get<Folha[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  somaDeDescontos(): any {
    return this.httpClient.get<Folha[]>(this.url)
    }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
