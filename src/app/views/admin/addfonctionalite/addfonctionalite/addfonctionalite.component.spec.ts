import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfonctionaliteComponent } from './addfonctionalite.component';

describe('AddfonctionaliteComponent', () => {
  let component: AddfonctionaliteComponent;
  let fixture: ComponentFixture<AddfonctionaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfonctionaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfonctionaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
