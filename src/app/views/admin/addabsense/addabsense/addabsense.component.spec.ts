import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddabsenseComponent } from './addabsense.component';

describe('AddabsenseComponent', () => {
  let component: AddabsenseComponent;
  let fixture: ComponentFixture<AddabsenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddabsenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddabsenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
