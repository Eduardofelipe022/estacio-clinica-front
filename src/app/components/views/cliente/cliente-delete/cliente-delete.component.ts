import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../models/cliente.modelo';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit{

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

  constructor(private service: ClienteService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
   this.cliente.id = this.route.snapshot.paramMap.get("id")!;
   this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.cliente.id!).subscribe((resposta) => {
      this.cliente = resposta;
    })
  }

  public deletarCliente(): void {
    this.service.deleteClienteService(this.cliente.id!).subscribe((reposta) => {
      this.router.navigate(["clientes"])
      this.service.mensagem("Cliente deletado com sucesso!")
    },
    (err) => {
        this.service.mensagem("Cliente não pode ser deletado! Possui Consultas associadas")
      }
    )
  }

   public navegarParaListaClientes(){
    this.router.navigate(["clientes"])
  }
}
