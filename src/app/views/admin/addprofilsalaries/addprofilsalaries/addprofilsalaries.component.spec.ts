import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofilsalariesComponent } from './addprofilsalaries.component';

describe('AddprofilsalariesComponent', () => {
  let component: AddprofilsalariesComponent;
  let fixture: ComponentFixture<AddprofilsalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofilsalariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofilsalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
