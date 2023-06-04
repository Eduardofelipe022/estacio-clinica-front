import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoReadAgendaComponent } from './recepcao-read-agenda.component';

describe('RecepcaoReadAgendaComponent', () => {
  let component: RecepcaoReadAgendaComponent;
  let fixture: ComponentFixture<RecepcaoReadAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoReadAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoReadAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
