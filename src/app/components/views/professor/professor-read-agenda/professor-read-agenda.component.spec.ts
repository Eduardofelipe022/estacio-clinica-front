import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorReadAgendaComponent } from './professor-read-agenda.component';

describe('ProfessorReadAgendaComponent', () => {
  let component: ProfessorReadAgendaComponent;
  let fixture: ComponentFixture<ProfessorReadAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorReadAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorReadAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
