import { ProfessorUpdateAgendaComponent } from './components/views/professor/professor-update-agenda/professor-update-agenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaReadComponent } from './components/views/agenda/agenda-read/agenda-read.component';
import { AgendaUpdateComponent } from './components/views/agenda/agenda-update/agenda-update.component';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { ClienteConsultaDetalhadaComponent } from './components/views/cliente/cliente-consulta-detalhada/cliente-consulta-detalhada.component';
import { ClienteCreateAgendaComponent } from './components/views/cliente/cliente-create-agenda/cliente-create-agenda.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadConsultasComponent } from './components/views/cliente/cliente-read-consultas/cliente-read-consultas.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read-option/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ConsultaCreateComponent } from './components/views/consulta/consulta-create/consulta-create.component';
import { EspecialidadReadComponent } from './components/views/especialidade/especialidad-read/especialidad-read.component';
import { FilaReadComponent } from './components/views/fila/fila-read/fila-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { LoginComponent } from './components/views/login/login.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';
import { ProfessorHomeComponent } from './components/views/professor/professor-home/professor-home.component';
import { ProfessorReadAgendaComponent } from './components/views/professor/professor-read-agenda/professor-read-agenda.component';
import { ProfessorReadConsultasComponent } from './components/views/professor/professor-read-consultas/professor-read-consultas.component';
import { ProfessorCreateConsultasComponent } from './components/views/professor/professor-create-consultas/professor-create-consultas.component';
import { ProfessorConsultaDetalhadaComponent } from './components/views/professor/professor-consulta-detalhada/professor-consulta-detalhada.component';
import { AlunoHomeComponent } from './components/views/aluno-views/aluno-home/aluno-home.component';
import { AlunoReadAgendaComponent } from './components/views/aluno-views/aluno-read-agenda/aluno-read-agenda.component';
import { AlunoReadConsultasComponent } from './components/views/aluno-views/aluno-read-consultas/aluno-read-consultas.component';
import { AlunoCreateConsultaComponent } from './components/views/aluno-views/aluno-create-consulta/aluno-create-consulta.component';
import { AlunoConsultaDetalhadaComponent } from './components/views/aluno-views/aluno-consulta-detalhada/aluno-consulta-detalhada.component';
import { RecepcaoHomeComponent } from './components/views/recepcao-views/recepcao-home/recepcao-home.component';
import { RecepcaoReadAgendaComponent } from './components/views/recepcao-views/recepcao-read-agenda/recepcao-read-agenda.component';
import { RecepcaoReadClienteComponent } from './components/views/recepcao-views/recepcao-read-cliente/recepcao-read-cliente.component';
import { RecepcaoCreateClienteComponent } from './components/views/recepcao-views/recepcao-create-cliente/recepcao-create-cliente.component';
import { RecepcaoUpdateClienteComponent } from './components/views/recepcao-views/recepcao-update-cliente/recepcao-update-cliente.component';
import { RecepcaoCreateAgendaComponent } from './components/views/recepcao-views/recepcao-create-agenda/recepcao-create-agenda.component';
import { RecepcaoReadConsultasComponent } from './components/views/recepcao-views/recepcao-read-consultas/recepcao-read-consultas.component';
import { RecepcaoConsultaDetalhadaComponent } from './components/views/recepcao-views/recepcao-consulta-detalhada/recepcao-consulta-detalhada.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "home/professor", component: ProfessorHomeComponent },
  { path: "home/aluno", component: AlunoHomeComponent },
  { path: "home/recepcao", component: RecepcaoHomeComponent },
  { path: "professor/agenda", component: ProfessorReadAgendaComponent},
  { path: "recepcao/agenda", component: RecepcaoReadAgendaComponent},
  { path: "professor/clientes/consulta/:id_cliente/consultas/create", component: ProfessorCreateConsultasComponent },
  { path: "professor/clientes/:id_cliente/consultas", component: ProfessorReadConsultasComponent },
  { path: "professor/agenda/update/:id" , component: ProfessorUpdateAgendaComponent },
  { path: "professor/clientes/:id_cliente/consultas/:id_consulta/consulta", component: ProfessorConsultaDetalhadaComponent},
  { path: "aluno/agenda", component: AlunoReadAgendaComponent},
  { path: "aluno/clientes/consulta/:id_cliente/consultas/create", component: AlunoCreateConsultaComponent },
  { path: "aluno/clientes/:id_cliente/consultas", component: AlunoReadConsultasComponent },
  { path: "aluno/clientes/:id_cliente/consultas/:id_consulta/consulta", component: AlunoConsultaDetalhadaComponent},
  { path: "clientes/consulta/:id_cliente/consultas/create", component: ConsultaCreateComponent },
  { path: "clientes", component: ClienteReadComponent },
  { path: "recepcao/clientes", component: RecepcaoReadClienteComponent },
  { path: "clientes/create", component: ClienteCreateComponent},
  { path: "recepcao/clientes/create", component: RecepcaoCreateClienteComponent},
  { path: "clientes/update/:id", component: ClienteUpdateComponent},
  { path: "recepcao/clientes/update/:id", component: RecepcaoUpdateClienteComponent},
  { path: "clientes/delete/:id", component: ClienteDeleteComponent },
  { path: "clientes/:id_cliente/consultas", component: ClienteReadConsultasComponent },
  { path: "recepcao/clientes/:id_cliente/consultas", component: RecepcaoReadConsultasComponent },
  { path: "clientes/:cpf/consultas", component: ClienteReadConsultasComponent },
  { path: "clientes/:id_cliente/consultas/:id_consulta/consulta", component: ClienteConsultaDetalhadaComponent},
  { path: "recepcao/clientes/:id_cliente/consultas/:id_consulta/consulta", component: RecepcaoConsultaDetalhadaComponent},
  { path: "agenda", component: AgendaReadComponent},
  { path: "agenda/update/:id" , component: AgendaUpdateComponent },
  { path: "clientes/agenda/create/:id" , component: ClienteCreateAgendaComponent },
  { path: "recepcao/clientes/agenda/create/:id" , component: RecepcaoCreateAgendaComponent },
  { path: "fila" , component: FilaReadComponent },
  { path: "especialidade" , component: EspecialidadReadComponent },
  { path: "alunos", component: AlunoReadComponent },
  { path: "alunos/create", component: AlunoCreateComponent },
  { path: "alunos/update/:id", component: AlunoUpdateComponent },
  { path: "alunos/delete/:id", component: AlunoDeleteComponent },
  { path: "usuarios", component: UsuarioReadComponent },
  { path: "usuarios/create", component: UsuarioCreateComponent },
  { path: "usuarios/update/:id", component: UsuarioUpdateComponent },
  { path: "usuarios/delete/:id", component: UsuarioDeleteComponent },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
