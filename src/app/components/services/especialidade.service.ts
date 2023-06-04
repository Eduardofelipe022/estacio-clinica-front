import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Especialidade } from '../models/especialidade.modelo';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public buscarPorId(id: String): Observable<Especialidade>{
    return this.http.get<Especialidade>("http://localhost:8086/especialidade/"+id);
  }

  public listarEspecialidadesService(): Observable<any> {
    return this.http.get('http://localhost:8086/especialidade');
  }

  public deleteEspecialidadeService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8086/especialidade/"+id);
  }

  public criarEspecialidadeService(especialidade: Especialidade): Observable<Especialidade> {
    return this.http.post<Especialidade>("http://localhost:8086/especialidade",especialidade);
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
