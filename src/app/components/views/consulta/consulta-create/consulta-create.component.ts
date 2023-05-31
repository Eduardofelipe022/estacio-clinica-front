import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from '../consulta.modelo';
import { ConsultaService } from '../consulta.service';
import { ClienteService } from '../../cliente/cliente.service';

@Component({
  selector: 'app-consulta-create',
  templateUrl: './consulta-create.component.html',
  styleUrls: ['./consulta-create.component.css']
})
export class ConsultaCreateComponent implements OnInit{

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

  id_cliente: string = "";
  nome!: String
 constructor(
    private serviceConsulta: ConsultaService,
    private serviceCliente: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get("id_cliente")!;
    this.nome = this.route.snapshot.paramMap.get("nome")!;
    this.buscarNome();
  }

  buscarNome (): void{
  this.serviceCliente.buscarPorId(this.id_cliente).subscribe((reposta) => {
    this.nome = reposta.nome;
  });
  }


  public criarConsulta(): void {
    this.serviceConsulta.criarConsultaService(this.id_cliente, this.consulta).subscribe(
      (resposta) => {
        this.router.navigate(["clientes/" + this.id_cliente + "/consultas"]);
        this.serviceConsulta.mensagem("Consulta criada com sucesso!");
      })
  }

  public navegarParaListaConsultas(): void {
    this.router.navigate(["clientes/" + this.id_cliente + "/consultas"]);
  }
}
