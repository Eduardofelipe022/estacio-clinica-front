import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-professor-header',
  templateUrl: './professor-header.component.html',
  styleUrls: ['./professor-header.component.css']
})
export class ProfessorHeaderComponent implements OnInit {

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
