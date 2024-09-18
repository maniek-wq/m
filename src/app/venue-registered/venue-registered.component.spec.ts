import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueRegisteredComponent } from './venue-registered.component';

describe('VenueRegisteredComponent', () => {
  let component: VenueRegisteredComponent;
  let fixture: ComponentFixture<VenueRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueRegisteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
