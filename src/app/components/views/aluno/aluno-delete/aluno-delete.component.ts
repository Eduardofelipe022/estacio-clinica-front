import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../service.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  aluno: Aluno = {
    matricula: "",
    nome: "",
    tipoPerfil: "",
    cpf: "",
    endereco: "",
    email: "",
    senha: "",
    curso: "",
    telefone:''
    };

  constructor(private service: AlunoService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
   this.aluno.id = this.route.snapshot.paramMap.get("id")!;
   this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.aluno.id!).subscribe((resposta) => {
      this.aluno = resposta;
    })
  }

  public deletarAluno(): void {
    this.service.deleteAlunoService(this.aluno.id!).subscribe((reposta) => {
      this.router.navigate(["alunos"])
      this.service.mensagem("Aluno deletado com sucesso!")
    },
    (err) => {

      }
    )
  }

   public navegarParaListaAlunos(){
    this.router.navigate(["alunos"])
  }
}
