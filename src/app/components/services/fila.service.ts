import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Fila } from '../models/fila.modelo';

@Injectable({
  providedIn: 'root',
})
export class FilaService {
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarFilaService(): Observable<any> {
    return this.http.get('http://localhost:8086/fila');
  }

  public criarFilaService(fila: Fila): Observable<Fila> {
    return this.http.post<Fila>('http://localhost:8086/fila', fila);
  }

  public buscarPorId(id: String): Observable<Fila> {
    return this.http.get<Fila>('http://localhost:8086/fila/' + id);
  }
  public deleteFilaService(id: String): Observable<any> {
    return this.http.delete('http://localhost:8086/fila/' + id);
  }

  public quantidadeFila(): Observable<any> {
    return this.http.get('http://localhost:8086/fila/quantidade');
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}
