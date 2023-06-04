import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorCreateConsultasComponent } from './professor-create-consultas.component';

describe('ProfessorCreateConsultasComponent', () => {
  let component: ProfessorCreateConsultasComponent;
  let fixture: ComponentFixture<ProfessorCreateConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorCreateConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorCreateConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
