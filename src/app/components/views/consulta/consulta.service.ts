import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Consulta } from './consulta.modelo';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  updateClienteService(cliente: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public buscarPorId(id: String): Observable<Consulta>{
    return this.http.get<Consulta>("http://localhost:8086/consultas/"+id);
  }

  public listarConsultasClientePorIdService(id_cliente: String): Observable<any> {
    const url = "http://localhost:8086/consultas/id?cliente=";
    return this.http.get<any>(url + id_cliente);
  }

  public listarConsultasClientePorCpfService(cpf_cliente: String): Observable<any> {
    const url = "http://localhost:8086/consultas?cliente=";
    return this.http.get<any>(url + cpf_cliente);
  }

  public criarConsultaService(id_cliente: String, consulta: Consulta): Observable<any> {
    const url = "http://localhost:8086/consultas?cliente=";
    return this.http.post<any>(url + id_cliente, consulta);
  }

  public updateConsultaService(consulta: Consulta) {
    const url = "http://localhost:8086/consultas/";
    return this.http.put(url + consulta.id, consulta);
  }

  public deleteConsultaService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8086/consultas/"+id);
  }

  public listarTodasConsultasService(): Observable<any> {
    const url = "http://localhost:8086/consultas/todas";
    return this.http.get<any>(url);
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, "ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000,
    });
  }
}
