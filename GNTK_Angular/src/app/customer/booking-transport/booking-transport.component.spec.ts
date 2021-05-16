import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTransportComponent } from './booking-transport.component';

describe('BookingTransportComponent', () => {
  let component: BookingTransportComponent;
  let fixture: ComponentFixture<BookingTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
