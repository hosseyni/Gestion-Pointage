import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofilaccesComponent } from './addprofilacces.component';

describe('AddprofilaccesComponent', () => {
  let component: AddprofilaccesComponent;
  let fixture: ComponentFixture<AddprofilaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofilaccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofilaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
