import { Curso } from './../models/curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Curso[]> {
    return this.http
      .get<Curso[]>('http://localhost:8080/curso')
      .pipe(
        first(),
        tap( c => console.log(c) )
      );
  }


}
