import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fila } from '../fila.modelo';
import { FilaService } from '../fila.service';

@Component({
  selector: 'app-fila-read',
  templateUrl: './fila-read.component.html',
  styleUrls: ['./fila-read.component.css']
})
export class FilaReadComponent implements OnInit{

  displayedColumns: string[] = [
    "sala",
    "nome",
    "acoes"
  ];

  filaCreate: Fila = {
    nome: "",
    sala: ""
  };

  fila: Fila[] = [];
  qtdFila!: number;

  constructor(private service: FilaService, private router: Router) {}

  public ngOnInit(): void {
    this.listarFila();
    this.quantidadeFila();
  }

  public criarOrdemDeChegada(): void {
    this.service.criarFilaService(this.filaCreate).subscribe(
      (resposta) => {
        location.reload();
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem("Campo Obrigatório!");
        }
      }
    );
  }

  public listarFila() {
    this.service.listarFilaService().subscribe((resposta) => {
      this.fila = resposta;
    });
  }

  public quantidadeFila() {
    this.service.quantidadeFila().subscribe((resposta) => {
      this.qtdFila = resposta;
    });
  }

  public navegarParaFilaCreate() {
    this.router.navigate(["fila/create"]);
  }

  public deletarDaFila(id: any): void {
    this.service.deleteFilaService(id).subscribe((reposta) => {
      location.reload();
    });
  }

}
