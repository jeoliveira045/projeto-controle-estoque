import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentFormComponent } from './moviment-form.component';

describe('MovimentFormComponent', () => {
  let component: MovimentFormComponent;
  let fixture: ComponentFixture<MovimentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
