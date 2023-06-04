import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from 'src/app/components/models/consulta.modelo';
import { ClienteService } from 'src/app/components/services/cliente.service';
import { ConsultaService } from 'src/app/components/services/consulta.service';
import { UsuarioService } from 'src/app/components/services/usuario.service';

@Component({
  selector: 'app-aluno-create-consulta',
  templateUrl: './aluno-create-consulta.component.html',
  styleUrls: ['./aluno-create-consulta.component.css']
})
export class AlunoCreateConsultaComponent implements OnInit{

  consulta: Consulta = {
    matricula: "",
    nomeAtendente: "",
    queixas: "",
    plano: "",
    avaliacao: "",
    exames: "",
    encaminhamento: "",
    dataConsulta: "",
    observacao: ""
  }

  id_cliente!: string;
  nomeCliente!: string
  id_usuario!: string ;
  nomeUsuario!: string;
  matricula!: string
 constructor(
    private serviceConsulta: ConsultaService,
    private serviceCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private service: UsuarioService
  ) {}

  ngOnInit(): void {
    this.id_usuario = this.service.usuario && this.service.usuario.id ?  this.service.usuario.id : '';
    this.id_cliente = this.route.snapshot.paramMap.get("id_cliente")!;
    this.nomeCliente = this.route.snapshot.paramMap.get("nome")!;
    this.buscarNomeCliente();
    this.buscarNomeUsuario();
  }

  buscarNomeCliente(): void{
  this.serviceCliente.buscarPorId(this.id_cliente).subscribe((reposta) => {
    this.nomeCliente = reposta.nome;
  });
  }

  buscarNomeUsuario(): void {
    this.service.buscarPorId(this.id_usuario).subscribe((reposta) => {
      this.nomeUsuario = reposta.nome;
      this.matricula = reposta.matricula;
    });
  }


  public criarConsulta(): void {
    this.consulta.matricula = this.matricula;
    this.consulta.nomeAtendente = this.nomeUsuario;
    this.serviceConsulta.criarConsultaService(this.id_cliente, this.consulta).subscribe(
      (resposta) => {
        this.router.navigate(["aluno/clientes/" + this.id_cliente + "/consultas"]);
        this.serviceConsulta.mensagem("Consulta criada com sucesso!");
      })
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(["aluno/clientes/" + this.id_cliente + "/consultas"]);
  }
}
