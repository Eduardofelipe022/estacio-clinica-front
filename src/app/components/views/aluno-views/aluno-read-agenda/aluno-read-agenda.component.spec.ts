import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoReadAgendaComponent } from './aluno-read-agenda.component';

describe('AlunoReadAgendaComponent', () => {
  let component: AlunoReadAgendaComponent;
  let fixture: ComponentFixture<AlunoReadAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoReadAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoReadAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
