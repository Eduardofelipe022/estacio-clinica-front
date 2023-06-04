import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorReadConsultasComponent } from './professor-read-consultas.component';

describe('ProfessorReadConsultasComponent', () => {
  let component: ProfessorReadConsultasComponent;
  let fixture: ComponentFixture<ProfessorReadConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorReadConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorReadConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
