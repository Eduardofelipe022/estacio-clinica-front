import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoUpdateClienteComponent } from './recepcao-update-cliente.component';

describe('RecepcaoUpdateClienteComponent', () => {
  let component: RecepcaoUpdateClienteComponent;
  let fixture: ComponentFixture<RecepcaoUpdateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoUpdateClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoUpdateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
