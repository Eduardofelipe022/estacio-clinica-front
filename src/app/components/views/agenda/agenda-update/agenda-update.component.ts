import { EspecialidadeService } from './../../especialidade/especialidade.service';
import { Component } from '@angular/core';
import { Agenda } from '../agenda.modelo';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Especialidade } from '../../especialidade/especialidade.modelo';
import { Aluno } from '../../aluno/aluno.modelo';
import { AlunoService } from '../../aluno/service.service';

@Component({
  selector: 'app-agenda-update',
  templateUrl: './agenda-update.component.html',
  styleUrls: ['./agenda-update.component.css'],
})
export class AgendaUpdateComponent {
  agenda: Agenda = {
    nome: '',
    data: '',
    fone: '',
    cpf: '',
    especialidade: '',
    nomeAluno: '',
  };

  especialidades: Especialidade[] = [];
  alunos: Aluno[] = [];
  atividadeFixa!: boolean;

  constructor(
    private service: AgendaService,
    private router: Router,
    private serviceEsp: EspecialidadeService,
    private route: ActivatedRoute,
    private serviceAluno: AlunoService
  ) {}

  ngOnInit(): void {
    this.agenda.id = this.route.snapshot.paramMap.get('id')!;
    this.buscarPorId();
    this.listarSelects();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.agenda.id!).subscribe((resposta) => {
      this.agenda.nome = resposta.nome;
      this.agenda.data = resposta.data;
      this.agenda.fone = resposta.fone;
      this.agenda.cpf = resposta.cpf;
      this.agenda.especialidade = resposta.especialidade;
      this.agenda.nomeAluno = resposta.nomeAluno;
    });
  }

  public atualizarAgenda(): void {
    this.service.updateAgendaService(this.agenda).subscribe(
      (resposta) => {
        this.router.navigate(['agenda']);
        this.service.mensagem('Agenda atualizada com sucesso!');
      },
      (err) => {
        this.service.mensagem(
          'Validar se todos os campos estão preenchidos corretamente!'
        );
      }
    );
  }

  public listarSelects() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.especialidades = resposta;
    });
    this.serviceAluno.listarAlunosService().subscribe((resposta) => {
      this.alunos = resposta;
    });
  }

  public navegarParaAgenda() {
    this.router.navigate(['agenda']);
  }
}
