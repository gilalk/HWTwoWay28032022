import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDaughterComponent } from './car-daughter.component';

describe('CarDaughterComponent', () => {
  let component: CarDaughterComponent;
  let fixture: ComponentFixture<CarDaughterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDaughterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDaughterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
