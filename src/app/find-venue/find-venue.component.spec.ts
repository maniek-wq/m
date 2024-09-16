import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindVenueComponent } from './find-venue.component';

describe('FindVenueComponent', () => {
  let component: FindVenueComponent;
  let fixture: ComponentFixture<FindVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindVenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
