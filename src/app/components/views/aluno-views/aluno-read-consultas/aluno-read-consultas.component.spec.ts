import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoReadConsultasComponent } from './aluno-read-consultas.component';

describe('AlunoReadConsultasComponent', () => {
  let component: AlunoReadConsultasComponent;
  let fixture: ComponentFixture<AlunoReadConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoReadConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoReadConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
