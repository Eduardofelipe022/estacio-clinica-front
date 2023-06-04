import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorUpdateAgendaComponent } from './professor-update-agenda.component';

describe('ProfessorUpdateAgendaComponent', () => {
  let component: ProfessorUpdateAgendaComponent;
  let fixture: ComponentFixture<ProfessorUpdateAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorUpdateAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorUpdateAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
