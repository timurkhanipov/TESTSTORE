import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketcounterComponent } from './basketcounter.component';

describe('BasketcounterComponent', () => {
  let component: BasketcounterComponent;
  let fixture: ComponentFixture<BasketcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketcounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
