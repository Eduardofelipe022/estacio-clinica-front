import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../models/usuario.modelo';
import { UsuarioService } from '../../../services/usuario.service';

interface TipoPerfil {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit{

  usuario: Usuario = {
    matricula: "",
    nome: "",
    tipoPerfil: "",
    cpf: "",
    endereco: "",
    email: "",
    senha: "",
    telefone:''
    };

  tipos: TipoPerfil[] = [
    {valor: 'ADMIN', viewValor: 'ADMIN'},
    {valor: 'RECEPCIONISTA', viewValor: 'RECEPCIONISTA'},
  ];

  constructor(
    private service: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.usuario.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.usuario.id!).subscribe((resposta) => {
      this.usuario.matricula = resposta.matricula;
      this.usuario.nome = resposta.nome;
      this.usuario.tipoPerfil = resposta.tipoPerfil;
      this.usuario.cpf = resposta.cpf;
      this.usuario.endereco = resposta.endereco;
      this.usuario.email = resposta.email;
      this.usuario.senha = resposta.senha;
      this.usuario.telefone = resposta.telefone;
    });
  }

  public atualizarUsuario(): void {
     this.service.updateUsuarioService(this.usuario).subscribe((resposta) => {
      this.router.navigate(["usuarios"]);
      this.service.mensagem("Usuário (" + this.usuario.nome + ") atualizado com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }

  public navegarParaListaUsuarios(){
    this.router.navigate(["usuarios"]);
  }
}
