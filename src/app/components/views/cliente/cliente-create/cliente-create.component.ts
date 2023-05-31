import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../cliente.modelo";
import { ClienteService } from "../cliente.service";

interface Sexo {
  valor: string;
  viewValor: string;
}

@Component({
  selector: "app-cliente-create",
  templateUrl: "./cliente-create.component.html",
  styleUrls: ["./cliente-create.component.css"],
})
export class ClienteCreateComponent implements OnInit{

  tipoSexo: Sexo[] = [
    { valor: 'Masculino', viewValor: 'Masculino' },
    { valor: 'Feminino', viewValor: 'Feminino' },
    { valor: 'Prefiro não dizer', viewValor: 'Prefiro não dizer' },
    { valor: 'Outros', viewValor: 'Outros' },
  ];

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
    idade:""
  };

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  public criarCliente(): void {
    this.service.criarClienteService(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(["clientes"]);
        this.service.mensagem("Cliente criado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem("Campos Obrigatórios!");
        }
      }
    );
  }

  public navegarParaListaClientes() {
    this.router.navigate(["clientes"]);
  }
}
