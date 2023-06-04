import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/components/models/agenda.modelo';
import { Cliente } from 'src/app/components/models/cliente.modelo';
import { AgendaService } from 'src/app/components/services/agenda.service';
import { ClienteService } from 'src/app/components/services/cliente.service';

@Component({
  selector: 'app-professor-read-agenda',
  templateUrl: './professor-read-agenda.component.html',
  styleUrls: ['./professor-read-agenda.component.css']
})
export class ProfessorReadAgendaComponent implements OnInit {

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
       this.router.navigate(['professor/clientes/' + this.cliente.id + '/consultas']);
      } else {
        this.serviceAgenda.mensagem('Paciente não encontrado!')
      }

    }
    );
  }
}
