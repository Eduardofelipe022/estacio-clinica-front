import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Agenda } from '../models/agenda.modelo';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarAgendasService(): Observable<any> {
    return this.http.get('http://localhost:8086/agenda/todas');
  }

  public listarAgendasServicePorCliente(id_cliente: String): Observable<any> {
    const url = "http://localhost:8086/agenda?cliente=";
    return this.http.get<any>(url + id_cliente);
  }

  public criarAgendaService(id_cliente: String, agenda: Agenda): Observable<any> {
    const url = "http://localhost:8086/agenda?cliente=";
    return this.http.post<any>(url + id_cliente, agenda);
  }

  public buscarPorId(id: String): Observable<Agenda> {
    return this.http.get<Agenda>('http://localhost:8086/agenda/' + id);
  }

  public updateAgendaService(agenda: Agenda) {
    const url = "http://localhost:8086/agenda/";
    return this.http.put(url + agenda.id, agenda);
  }

  public deleteAgendaService(id: String): Observable<any> {
    return this.http.delete('http://localhost:8086/agenda/' + id);
  }

  public quantidadeAgendadas(): Observable<any> {
    return this.http.get('http://localhost:8086/agenda/quantidade');
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }
}
