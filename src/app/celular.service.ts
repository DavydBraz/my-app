import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celular } from './celular';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CelularService {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  getCelulares(): Observable<Celular[]> {
    return this.http.get<Celular[]>(`${this.apiUrl}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError('Erro ao obter celulares');
        })
      );
  }

  getCelular(id: string): Observable<Celular> {
    const url = `${this.apiUrl}celulares/${id}`;
    return this.http.get<Celular>(url);
  }

  addCelular(celular: Celular): Observable<Celular> {
    return this.http.post<Celular>(`${this.apiUrl}celulares`, celular).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError('Erro ao adicionar celular');
      })
    );
  }

  updateCelular(id: string, celular: Celular): Observable<Celular> {
    const url = `${this.apiUrl}celulares/${id}`;
    return this.http.put<Celular>(url, celular);
  }

  deleteCelular(id: string): Observable<any> {
    const url = `${this.apiUrl}celulares/${id}`;
    return this.http.delete(url);
  }
}