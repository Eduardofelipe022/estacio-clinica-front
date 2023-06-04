import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/components/models/cliente.modelo';
import { Consulta } from 'src/app/components/models/consulta.modelo';
import { ClienteService } from 'src/app/components/services/cliente.service';
import { ConsultaService } from 'src/app/components/services/consulta.service';

@Component({
  selector: 'app-recepcao-consulta-detalhada',
  templateUrl: './recepcao-consulta-detalhada.component.html',
  styleUrls: ['./recepcao-consulta-detalhada.component.css']
})
export class RecepcaoConsultaDetalhadaComponent implements OnInit{

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

  cliente: Cliente = {
    nome: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    cpf: "",
    sexo: "",
    nomeMae: "",
    naturalidade:"",
    endereco: "",
    cidade:"",
    bairro:''
  };


  id_cliente: String = "";


  constructor(
    private serviceCli: ClienteService,
    private service: ConsultaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get("id_cliente")!;
    this.consulta.id = this.route.snapshot.paramMap.get("id_consulta")!;
    this.buscarClientePorId();
    this.buscarConsultaPorId();
  }

  public buscarConsultaPorId(): void {
    this.service.buscarPorId(this.consulta.id!).subscribe((resposta) => {
      this.consulta.matricula = resposta.matricula;
      this.consulta.nomeAtendente = resposta.nomeAtendente;
      this.consulta.queixas = resposta.queixas;
      this.consulta.plano = resposta.plano;
      this.consulta.avaliacao = resposta.avaliacao;
      this.consulta.exames = resposta.exames;
      this.consulta.encaminhamento = resposta.encaminhamento;
      this.consulta.dataConsulta = resposta.dataConsulta;
      this.consulta.observacao = resposta.observacao;
    })
  }
  public buscarClientePorId(): void {
      this.serviceCli.buscarPorId(this.id_cliente).subscribe((resposta) =>{
      this.cliente.nome = resposta.nome;
      this.cliente.dataNascimento = resposta.dataNascimento;
      this.cliente.telefone = resposta.telefone;
      this.cliente.email = resposta.email;
      this.cliente.cpf = resposta.cpf;
      this.cliente.sexo = resposta.sexo;
      this.cliente.nomeMae = resposta.nomeMae;
      this.cliente.naturalidade = resposta.naturalidade;
      this.cliente.endereco = resposta.endereco;
      this.cliente.cidade = resposta.cidade;
    });
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(["recepcao/clientes/" + this.id_cliente + "/consultas"])
  }
}
