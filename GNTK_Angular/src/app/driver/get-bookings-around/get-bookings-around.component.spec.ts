import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookingsAroundComponent } from './get-bookings-around.component';

describe('GetBookingsAroundComponent', () => {
  let component: GetBookingsAroundComponent;
  let fixture: ComponentFixture<GetBookingsAroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookingsAroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookingsAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
