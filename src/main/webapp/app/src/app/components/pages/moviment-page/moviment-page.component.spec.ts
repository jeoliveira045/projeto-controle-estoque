import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentPageComponent } from './moviment-page.component';

describe('MovimentPageComponent', () => {
  let component: MovimentPageComponent;
  let fixture: ComponentFixture<MovimentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
