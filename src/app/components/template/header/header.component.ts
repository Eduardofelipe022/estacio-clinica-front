import { Component, Input, OnInit } from '@angular/core';
import { UsuarioService } from '../../views/usuario/usuario.service';
import { LoginComponent } from '../../views/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usu!: LoginComponent;
  nome!:string;
  constructor(private route: ActivatedRoute, public service: UsuarioService,) {

  private id ='1';
  nome: String = '';
  constructor(private service: UsuarioService) {}
  ngOnInit(): void {
    this.id = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '1';
    this.buscarNome();
  }

  buscarNome(): void {
    this.service.buscarPorId(this.id).subscribe((reposta) => {
      this.nome = reposta.nome;
    });
  }
}
