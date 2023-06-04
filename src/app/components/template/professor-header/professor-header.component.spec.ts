import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHeaderComponent } from './professor-header.component';

describe('ProfessorHeaderComponent', () => {
  let component: ProfessorHeaderComponent;
  let fixture: ComponentFixture<ProfessorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
