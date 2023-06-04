import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.modelo';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit{

  displayedColumns: string[] = [
    'matricula',
    'nome',
    'cpf',
    'tipoPerfil',
    'telefone',
    'acoes',
  ];

  dataSource!: MatTableDataSource<Usuario>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: UsuarioService, private router: Router) {
    this.service.listarUsuariosService().subscribe((resposta) => {
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

  public navegarParaUsuarioCreate() {
    this.router.navigate(['usuarios/create']);
  }
}
