import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoReadConsultasComponent } from './recepcao-read-consultas.component';

describe('RecepcaoReadConsultasComponent', () => {
  let component: RecepcaoReadConsultasComponent;
  let fixture: ComponentFixture<RecepcaoReadConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoReadConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoReadConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
