import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AgendaReadComponent } from './components/views/agenda/agenda-read/agenda-read.component';
import { ClienteCreateComponent } from './components/views/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/views/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './components/views/cliente/cliente-read-option/cliente-read.component';
import { ClienteUpdateComponent } from './components/views/cliente/cliente-update/cliente-update.component';
import { ClienteService } from './components/services/cliente.service';
import { ConsultaCreateComponent } from './components/views/consulta/consulta-create/consulta-create.component';
import { ClienteReadConsultasComponent } from './components/views/cliente/cliente-read-consultas/cliente-read-consultas.component';
import { ClienteConsultaDetalhadaComponent } from './components/views/cliente/cliente-consulta-detalhada/cliente-consulta-detalhada.component';
import { LoginComponent } from './components/views/login/login.component';
import { AgendaUpdateComponent } from './components/views/agenda/agenda-update/agenda-update.component';
import { FilaReadComponent } from './components/views/fila/fila-read/fila-read.component';
import { ClienteCreateAgendaComponent } from './components/views/cliente/cliente-create-agenda/cliente-create-agenda.component';
import { EspecialidadReadComponent } from './components/views/especialidade/especialidad-read/especialidad-read.component';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { UsuarioReadComponent } from './components/views/usuario/usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './components/views/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/views/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/views/usuario/usuario-delete/usuario-delete.component';
import  {MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ProfessorHomeComponent } from './components/views/professor/professor-home/professor-home.component';
import { ProfessorHeaderComponent } from './components/template/professor-header/professor-header.component';
import { AlunoHeaderComponent } from './components/template/aluno-header/aluno-header.component';
import { RecepcaoHeaderComponent } from './components/template/recepcao-header/recepcao-header.component';
import { ProfessorReadAgendaComponent } from './components/views/professor/professor-read-agenda/professor-read-agenda.component';
import { ProfessorUpdateAgendaComponent } from './components/views/professor/professor-update-agenda/professor-update-agenda.component';
import { ProfessorReadConsultasComponent } from './components/views/professor/professor-read-consultas/professor-read-consultas.component';
import { ProfessorCreateConsultasComponent } from './components/views/professor/professor-create-consultas/professor-create-consultas.component';
import { ProfessorConsultaDetalhadaComponent } from './components/views/professor/professor-consulta-detalhada/professor-consulta-detalhada.component';
import { AlunoReadAgendaComponent } from './components/views/aluno-views/aluno-read-agenda/aluno-read-agenda.component';
import { AlunoHomeComponent } from './components/views/aluno-views/aluno-home/aluno-home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClienteReadComponent,
    ClienteDeleteComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ConsultaCreateComponent,
    AgendaReadComponent,
    ClienteReadConsultasComponent,
    ClienteConsultaDetalhadaComponent,
    LoginComponent,
    AgendaUpdateComponent,
    FilaReadComponent,
    ClienteCreateAgendaComponent,
    EspecialidadReadComponent,
    AlunoCreateComponent,
    AlunoDeleteComponent,
    AlunoUpdateComponent,
    AlunoReadComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    ProfessorHomeComponent,
    ProfessorHeaderComponent,
    AlunoHeaderComponent,
    RecepcaoHeaderComponent,
    ProfessorReadAgendaComponent,
    ProfessorUpdateAgendaComponent,
    ProfessorReadConsultasComponent,
    ProfessorCreateConsultasComponent,
    ProfessorConsultaDetalhadaComponent,
    AlunoReadAgendaComponent,
    AlunoHomeComponent,
    AlunoReadConsultasComponent,
    AlunoCreateConsultaComponent,
    AlunoConsultaDetalhadaComponent,
    RecepcaoHomeComponent,
    RecepcaoReadAgendaComponent,
    RecepcaoReadClienteComponent,
    RecepcaoCreateClienteComponent,
    RecepcaoUpdateClienteComponent,
    RecepcaoCreateAgendaComponent,
    RecepcaoReadConsultasComponent,
    RecepcaoConsultaDetalhadaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [ClienteService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
