import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.modelo';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarAlunosService(): Observable<any> {
    return this.http.get("http://localhost:8086/aluno");
  }

  public criarAlunoService(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>("http://localhost:8086/aluno",aluno);
  }

  public buscarPorId(id: String): Observable<Aluno>{
    return this.http.get<Aluno>("http://localhost:8086/aluno/"+id);
  }

  public buscarPorCpf(cpf: String): Observable<Aluno>{
    return this.http.get<Aluno>("http://localhost:8086/aluno/cpf="+cpf);
  }

  public deleteAlunoService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8086/aluno/"+id);
  }

  public updateAlunoService(aluno: Aluno) {
    const url = "http://localhost:8086/aluno/";
    return this.http.put(url + aluno.id, aluno);
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
