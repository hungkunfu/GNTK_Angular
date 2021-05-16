import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversAroundComponent } from './drivers-around.component';

describe('DriversAroundComponent', () => {
  let component: DriversAroundComponent;
  let fixture: ComponentFixture<DriversAroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversAroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
