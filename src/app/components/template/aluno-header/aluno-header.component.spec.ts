import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoHeaderComponent } from './aluno-header.component';

describe('AlunoHeaderComponent', () => {
  let component: AlunoHeaderComponent;
  let fixture: ComponentFixture<AlunoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
