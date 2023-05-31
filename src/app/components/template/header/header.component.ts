import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../views/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usu!: LoginComponent;
  nome!:string;
  constructor(private route: ActivatedRoute, public service: UsuarioService,) {

  }
  ngOnInit(): void {
    this.buscarNome();
  }

  buscarNome (): void{
    this.service.buscarPorId('1').subscribe((reposta) => {
      this.nome = reposta.nome;
    });
  }
}
