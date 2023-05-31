import { Component } from '@angular/core';
import { Aluno } from '../aluno.modelo';
import { AlunoService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialidadeService } from '../../especialidade/especialidade.service';
import { Especialidade } from '../../especialidade/especialidade.modelo';

interface TipoPerfil {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css'],
})
export class AlunoUpdateComponent {
  aluno: Aluno = {
    matricula: '',
    nome: '',
    tipoPerfil: '',
    cpf: '',
    endereco: '',
    email: '',
    senha: '',
    curso: '',
    telefone: '',
  };

  selects: Especialidade[] = [];
  tipos: TipoPerfil[] = [{ valor: 'ALUNO', viewValor: 'ALUNO' }];

  constructor(
    private service: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceEsp: EspecialidadeService
  ) {}

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get('id')!;
    this.listarEspecialidade();
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.aluno.id!).subscribe((resposta) => {
      this.aluno.matricula = resposta.matricula;
      this.aluno.nome = resposta.nome;
      this.aluno.tipoPerfil = resposta.tipoPerfil;
      this.aluno.cpf = resposta.cpf;
      this.aluno.endereco = resposta.endereco;
      this.aluno.email = resposta.email;
      this.aluno.senha = resposta.senha;
      this.aluno.curso = resposta.curso;
    });
  }

  public listarEspecialidade() {
    this.serviceEsp.listarEspecialidadesService().subscribe((resposta) => {
      this.selects = resposta;
    });
  }

  public atualizarAluno(): void {
    this.service.updateAlunoService(this.aluno).subscribe(
      (resposta) => {
        this.router.navigate(['alunos']);
        this.service.mensagem('Aluno atualizado com sucesso!');
      },
      (err) => {
        this.service.mensagem(
          'Validar se todos os campos estão preenchidos corretamente!'
        );
      }
    );
  }

  public navegarParaListaAlunos() {
    this.router.navigate(['alunos']);
  }
}
