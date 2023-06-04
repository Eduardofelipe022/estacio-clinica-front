import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoConsultaDetalhadaComponent } from './aluno-consulta-detalhada.component';

describe('AlunoConsultaDetalhadaComponent', () => {
  let component: AlunoConsultaDetalhadaComponent;
  let fixture: ComponentFixture<AlunoConsultaDetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoConsultaDetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoConsultaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
