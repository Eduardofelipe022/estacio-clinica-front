import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../../../models/aluno.modelo';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlunoService } from '../../../services/service.service';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit{

  displayedColumns: string[] = [
    'matricula',
    'nome',
    'cpf',
    'tipoPerfil',
    'curso',
    'senha',
    'acoes',
  ];

  dataSource!: MatTableDataSource<Aluno>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: AlunoService, private router: Router) {
    this.service.listarAlunosService().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }
  public ngOnInit(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public navegarParaAlunoCreate() {
    this.router.navigate(['alunos/create']);
  }
}
