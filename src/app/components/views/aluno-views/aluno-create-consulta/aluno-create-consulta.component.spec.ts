import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCreateConsultaComponent } from './aluno-create-consulta.component';

describe('AlunoCreateConsultaComponent', () => {
  let component: AlunoCreateConsultaComponent;
  let fixture: ComponentFixture<AlunoCreateConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoCreateConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoCreateConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
