import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-aluno-header',
  templateUrl: './aluno-header.component.html',
  styleUrls: ['./aluno-header.component.css']
})
export class AlunoHeaderComponent implements OnInit{

  private id ='';
  nome: String = '';
  constructor(private service: UsuarioService) {}
  ngOnInit(): void {
    this.id = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '';
    this.buscarNome();
  }

  buscarNome(): void {
    this.service.buscarPorId(this.id).subscribe((reposta) => {
      this.nome = reposta.nome;
    });
  }
}
