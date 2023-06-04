import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.modelo';
import { UsuarioService } from '../../../services/usuario.service';

interface TipoPerfil {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css'],
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    matricula: '',
    nome: '',
    tipoPerfil: '',
    cpf: '',
    endereco: '',
    email: '',
    senha: '',
    telefone:''
  };

  tipos: TipoPerfil[] = [
    { valor: 'PROFESSOR', viewValor: 'PROFESSOR' },
    { valor: 'RECEPCIONISTA', viewValor: 'RECEPCIONISTA' },
  ];

  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  public criarUsuario(): void {
    this.service.criarUsuarioService(this.usuario).subscribe(
      (resposta) => {
        this.router.navigate(['usuarios']);
        this.service.mensagem("Usuário  (" + this.usuario.nome + ") adicionado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Campos Obrigatórios!');
        }
      }
    );
  }

  public navegarParaListaUsuarios() {
    this.router.navigate(['usuarios']);
  }
}
