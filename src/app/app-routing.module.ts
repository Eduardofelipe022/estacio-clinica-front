import { LoginComponent } from './components/views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AgendaReadComponent } from './components/views/agenda/agenda-read/agenda-read.component';
import { ClienteConsultaDetalhadaComponent } from './components/views/cliente/cliente-consulta-detalhada/cliente-consulta-detalhada.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadConsultasComponent } from './components/views/cliente/cliente-read-consultas/cliente-read-consultas.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read-option/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ConsultaCreateComponent } from './components/views/consulta/consulta-create/consulta-create.component';
import { AgendaUpdateComponent } from './components/views/agenda/agenda-update/agenda-update.component';
import { FilaReadComponent } from './components/views/fila/fila-read/fila-read.component';
import { ClienteCreateAgendaComponent } from './components/views/cliente/cliente-create-agenda/cliente-create-agenda.component';
import { EspecialidadReadComponent } from './components/views/especialidade/especialidad-read/especialidad-read.component';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';
import { CanActiveGuard } from './components/views/guard/can-active.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent , canActivate: [CanActiveGuard]},
  { path: "clientes/consulta/:id_cliente/consultas/create", component: ConsultaCreateComponent, canActivate: [CanActiveGuard] },
  { path: "clientes", component: ClienteReadComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/create", component: ClienteCreateComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/update/:id", component: ClienteUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/delete/:id", component: ClienteDeleteComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/:id_cliente/consultas", component: ClienteReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/:cpf/consultas", component: ClienteReadConsultasComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/:id_cliente/consultas/:id_consulta/consulta", component: ClienteConsultaDetalhadaComponent, canActivate: [CanActiveGuard]},
  { path: "agenda", component: AgendaReadComponent, canActivate: [CanActiveGuard] },
  { path: "agenda/update/:id" , component: AgendaUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "clientes/agenda/create/:id" , component: ClienteCreateAgendaComponent, canActivate: [CanActiveGuard] },
  { path: "fila" , component: FilaReadComponent, canActivate: [CanActiveGuard] },
  { path: "especialidade" , component: EspecialidadReadComponent, canActivate: [CanActiveGuard] },
  { path: "alunos", component: AlunoReadComponent, canActivate: [CanActiveGuard] },
  { path: "alunos/create", component: AlunoCreateComponent, canActivate: [CanActiveGuard] },
  { path: "alunos/update/:id", component: AlunoUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "alunos/delete/:id", component: AlunoDeleteComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios", component: UsuarioReadComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios/create", component: UsuarioCreateComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios/update/:id", component: UsuarioUpdateComponent, canActivate: [CanActiveGuard] },
  { path: "usuarios/delete/:id", component: UsuarioDeleteComponent, canActivate: [CanActiveGuard] },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
