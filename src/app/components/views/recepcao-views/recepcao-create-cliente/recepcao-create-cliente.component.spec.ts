import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoCreateClienteComponent } from './recepcao-create-cliente.component';

describe('RecepcaoCreateClienteComponent', () => {
  let component: RecepcaoCreateClienteComponent;
  let fixture: ComponentFixture<RecepcaoCreateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoCreateClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoCreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
