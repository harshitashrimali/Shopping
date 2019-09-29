import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryreturnsComponent } from './deliveryreturns.component';

describe('DeliveryreturnsComponent', () => {
  let component: DeliveryreturnsComponent;
  let fixture: ComponentFixture<DeliveryreturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryreturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
