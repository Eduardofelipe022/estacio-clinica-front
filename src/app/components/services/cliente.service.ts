import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from "rxjs";
import { Cliente } from '../models/cliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarClientesService(): Observable<any> {
    return this.http.get("http://localhost:8086/paciente");
  }

  public criarClienteService(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>("http://localhost:8086/paciente",cliente);
  }

  public buscarPorId(id: String): Observable<Cliente>{
    return this.http.get<Cliente>("http://localhost:8086/paciente/"+id);
  }

  public buscarPorCpf(cpf: String): Observable<Cliente>{
    return this.http.get<Cliente>("http://localhost:8086/paciente/cpf="+cpf);
  }

  public deleteClienteService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8086/paciente/"+id);
  }

  public updateClienteService(cliente: Cliente) {
    const url = "http://localhost:8086/paciente/";
    return this.http.put(url + cliente.id, cliente);
  }

  public quantidadeClientes(): Observable<any> {
    return this.http.get("http://localhost:8086/paciente/quantidade");
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
