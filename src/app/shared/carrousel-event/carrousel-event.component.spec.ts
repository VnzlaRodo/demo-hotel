import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselEventComponent } from './carrousel-event.component';

describe('CarrouselEventComponent', () => {
  let component: CarrouselEventComponent;
  let fixture: ComponentFixture<CarrouselEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
