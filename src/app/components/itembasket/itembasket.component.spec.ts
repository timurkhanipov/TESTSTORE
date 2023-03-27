import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembasketComponent } from './itembasket.component';

describe('ItembasketComponent', () => {
  let component: ItembasketComponent;
  let fixture: ComponentFixture<ItembasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItembasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItembasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
