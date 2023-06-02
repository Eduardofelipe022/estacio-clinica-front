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

  hide = true;
  email!: string;
  senha!: string;
  usuario!: Usuario

  constructor(
    private router: Router,
    public service: UsuarioService,

  ) {}

  ngOnInit(): void {

  }

  submitLogin() {
    this.service.buscarPorEmail(this.email).subscribe({
      next: (resposta) => {
        this.usuario = resposta;
        console.log(this.usuario);
        if (this.usuario.tipoPerfil === 'ADMIN' && this.usuario.email === this.email) {
          this.router.navigate(['/home']);
        } if (this.usuario.tipoPerfil === 'ALUNO' && this.usuario.email === this.email && this.usuario.senha === this.senha) {
          this.router.navigate(['/alunos']);
        } if (this.usuario.tipoPerfil === 'RECEPCIONISTA' && this.usuario.email === this.email && this.usuario.senha === this.senha) {
          this.router.navigate(['/usuarios']);
        } if (this.usuario === null){
          this.service.mensagem('E-mail ou Senha incorreto!');
      }
    }
  });
  }
}
