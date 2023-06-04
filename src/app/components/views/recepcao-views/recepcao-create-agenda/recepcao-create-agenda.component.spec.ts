import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoCreateAgendaComponent } from './recepcao-create-agenda.component';

describe('RecepcaoCreateAgendaComponent', () => {
  let component: RecepcaoCreateAgendaComponent;
  let fixture: ComponentFixture<RecepcaoCreateAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoCreateAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoCreateAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
