import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoConsultaDetalhadaComponent } from './recepcao-consulta-detalhada.component';

describe('RecepcaoConsultaDetalhadaComponent', () => {
  let component: RecepcaoConsultaDetalhadaComponent;
  let fixture: ComponentFixture<RecepcaoConsultaDetalhadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoConsultaDetalhadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoConsultaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
