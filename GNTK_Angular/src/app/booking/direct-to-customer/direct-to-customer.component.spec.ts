import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectToCustomerComponent } from './direct-to-customer.component';

describe('DirectToCustomerComponent', () => {
  let component: DirectToCustomerComponent;
  let fixture: ComponentFixture<DirectToCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectToCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
