import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoHeaderComponent } from './recepcao-header.component';

describe('RecepcaoHeaderComponent', () => {
  let component: RecepcaoHeaderComponent;
  let fixture: ComponentFixture<RecepcaoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepcaoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepcaoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
