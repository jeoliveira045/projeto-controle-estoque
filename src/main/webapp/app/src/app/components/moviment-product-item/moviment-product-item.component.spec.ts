import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentProductItemComponent } from './moviment-product-item.component';

describe('MovimentProductItemComponent', () => {
  let component: MovimentProductItemComponent;
  let fixture: ComponentFixture<MovimentProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentProductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
