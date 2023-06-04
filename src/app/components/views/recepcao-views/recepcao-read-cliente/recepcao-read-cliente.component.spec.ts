import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoReadClienteComponent } from './recepcao-read-cliente.component';

describe('RecepcaoReadClienteComponent', () => {
  let component: RecepcaoReadClienteComponent;
  let fixture: ComponentFixture<RecepcaoReadClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoReadClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoReadClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
