import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/components/models/cliente.modelo';
import { ClienteService } from 'src/app/components/services/cliente.service';

interface Genero {
  valor: string;
  viewValor: string;
}

@Component({
  selector: 'app-recepcao-create-cliente',
  templateUrl: './recepcao-create-cliente.component.html',
  styleUrls: ['./recepcao-create-cliente.component.css']
})
export class RecepcaoCreateClienteComponent implements OnInit{

  tipoSexo: Genero[] = [
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
    bairro:""
  };

  constructor(private service: ClienteService, private router: Router) {}

  ngOnInit(): void {}

  public criarCliente(): void {
    this.service.criarClienteService(this.cliente).subscribe(
      (resposta) => {
        this.router.navigate(["recepcao/clientes"]);
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
    this.router.navigate(["recepcao/clientes"]);
  }
}
