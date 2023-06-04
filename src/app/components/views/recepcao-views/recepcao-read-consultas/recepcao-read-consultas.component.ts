import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from 'src/app/components/models/consulta.modelo';
import { ClienteService } from 'src/app/components/services/cliente.service';
import { ConsultaService } from 'src/app/components/services/consulta.service';

@Component({
  selector: 'app-recepcao-read-consultas',
  templateUrl: './recepcao-read-consultas.component.html',
  styleUrls: ['./recepcao-read-consultas.component.css']
})
export class RecepcaoReadConsultasComponent implements OnInit {

  displayedColumns: string[] = [
    "dataConsulta",
    "nomeAtendente",
    "detalhada"
  ];
  consultas: Consulta[] = [];
  nome: String = "";
  id_cliente: String = "";
  qtdCOnsultas!: number;

  constructor(private serviseCli: ClienteService,private service: ConsultaService, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get("id_cliente")!
    this.nome = this.route.snapshot.paramMap.get("nome")!
    this.listarConsultas();
  }

  public listarConsultas() {
    this.service.listarConsultasClientePorIdService(this.id_cliente).subscribe((resposta) => {
    this.consultas = resposta;
    this.serviseCli.buscarPorId(this.id_cliente).subscribe((reposta) => {
      this.nome = reposta.nome;
    });
    });
  }

  public navegarParaClientes() {
    this.router.navigate(["recepcao/clientes"]);
  }
}
