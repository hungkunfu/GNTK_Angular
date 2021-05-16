import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectToDestinationComponent } from './direct-to-destination.component';

describe('DirectToDestinationComponent', () => {
  let component: DirectToDestinationComponent;
  let fixture: ComponentFixture<DirectToDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectToDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectToDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
