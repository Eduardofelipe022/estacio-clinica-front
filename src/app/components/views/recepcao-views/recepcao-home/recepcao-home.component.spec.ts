import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoHomeComponent } from './recepcao-home.component';

describe('RecepcaoHomeComponent', () => {
  let component: RecepcaoHomeComponent;
  let fixture: ComponentFixture<RecepcaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
