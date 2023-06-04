import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialidade } from '../../../models/especialidade.modelo';
import { EspecialidadeService } from '../../../services/especialidade.service';
import { Aluno } from '../../../models/aluno.modelo';
import { AlunoService } from '../../../services/service.service';

interface TipoPerfil {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css'],
})
export class AlunoCreateComponent implements OnInit {
  aluno: Aluno = {
    matricula: '',
    nome: '',
    tipoPerfil: '',
    cpf: '',
    endereco: '',
    email: '',
    senha: '',
    curso: '',
    telefone:''
  };
  selects: Especialidade[] = [];
  tipos: TipoPerfil[] = [
    { valor: 'ALUNO', viewValor: 'ALUNO' }
  ];

  constructor(
    private service: AlunoService,
    private router: Router,
    private serviceEsp: EspecialidadeService
  ) {}

  ngOnInit(): void {
    this.listarEspecialidade();
  }

  public listarEspecialidade() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.selects = resposta;
    });
  }

  public criarAluno(): void {
    this.service.criarAlunoService(this.aluno).subscribe(
      (resposta) => {
        this.router.navigate(['alunos']);
        this.service.mensagem('Aluno criado com sucesso!');
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campos Obrigatórios!');
        }
      }
    );
  }

  public navegarParaListaAlunos() {
    this.router.navigate(['alunos']);
  }
}
