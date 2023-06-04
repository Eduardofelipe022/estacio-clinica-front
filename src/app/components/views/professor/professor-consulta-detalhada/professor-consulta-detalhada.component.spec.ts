import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorConsultaDetalhadaComponent } from './professor-consulta-detalhada.component';

describe('ProfessorConsultaDetalhadaComponent', () => {
  let component: ProfessorConsultaDetalhadaComponent;
  let fixture: ComponentFixture<ProfessorConsultaDetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorConsultaDetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorConsultaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
