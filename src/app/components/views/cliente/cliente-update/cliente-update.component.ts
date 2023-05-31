import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.modelo';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit{

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
    idade:''
  };

  constructor(
    private service: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.cliente.id!).subscribe((resposta) => {
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
      this.cliente.idade = resposta.idade;
    });
  }

  public atualizarCliente(): void {
     this.service.updateClienteService(this.cliente).subscribe((resposta) => {
      this.router.navigate(["clientes"]);
      this.service.mensagem("Cliente atualizado com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }

  public navegarParaListaClientes(){
    this.router.navigate(["clientes"]);
  }
}
