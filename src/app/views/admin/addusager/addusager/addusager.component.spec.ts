import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusagerComponent } from './addusager.component';

describe('AddusagerComponent', () => {
  let component: AddusagerComponent;
  let fixture: ComponentFixture<AddusagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
