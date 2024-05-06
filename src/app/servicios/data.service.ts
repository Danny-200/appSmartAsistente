import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public parameterCedula: any;
  public parameterNombrePaciente: any;

  constructor(private http: HttpClient) { }

  getData(metodo: string): Observable<string> {
    return this.http.get(metodo, { responseType: 'text' });
  }
}