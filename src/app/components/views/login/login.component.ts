import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario.modelo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email!: string;
  senha!: string;
  usuario!: Usuario;
  id!: string | undefined;

  constructor(
    private router: Router,
    public service: UsuarioService,

  ) {}

  ngOnInit(): void {

  }

  submitLogin() {
    this.service.buscarPorSenha(this.senha).subscribe(
      (resposta) => {
        this.usuario = resposta;
        if (this.usuario.tipoPerfil === 'ADMIN' && this.usuario.email === this.email) {
          this.router.navigate(['/home']);
        } else if (this.usuario.tipoPerfil === 'ALUNO' && this.usuario.email === this.email) {
          this.router.navigate(['/alunos']);
        } else if (this.usuario.tipoPerfil === 'RECEPCIONISTA' && this.usuario.email === this.email) {
          this.router.navigate(['/usuarios']);
        }
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem('Usuário não encontrado!');
        }
      }
    );
  }
}
