import { Agenda } from '../../../models/agenda.modelo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendaService } from '../../../services/agenda.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/cliente.modelo';

@Component({
  selector: 'app-agenda-read',
  templateUrl: './agenda-read.component.html',
  styleUrls: ['./agenda-read.component.css'],
})
export class AgendaReadComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'cpf',
    'data',
    'fone',
    'especialidade',
    'nomeAluno',
    'acoes',
  ];

  cpf: any;
  cliente!: Cliente;
  agenda: Agenda[] = [];
  qtdAgendadas!: number;
  dataSource!: MatTableDataSource<Agenda>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private serviceAgenda: AgendaService,
    private router: Router,
    private serviceCliente: ClienteService
  ) {
    this.serviceAgenda.listarAgendasService().subscribe((resposta) => {
      this.dataSource = new MatTableDataSource(resposta);
      this.dataSource.paginator = this.paginator;
    });
  }

  public ngOnInit(): void {
    this.quantidadeAgendadas();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public quantidadeAgendadas() {
    this.serviceAgenda.quantidadeAgendadas().subscribe((resposta) => {
      this.qtdAgendadas = resposta;
    });
  }
   public consultas(cpf: any): void {
    this.serviceCliente.buscarPorCpf(cpf).subscribe((resposta) => {
      this.cliente = resposta;
     if(this.cliente != null){
       this.router.navigate(['clientes/' + this.cliente.id + '/consultas']);
      } else {
        this.serviceAgenda.mensagem('Paciente não encontrado!')
      }

    }
    );
  }
}
