import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeabsenceComponent } from './typeabsence.component';

describe('TypeabsenceComponent', () => {
  let component: TypeabsenceComponent;
  let fixture: ComponentFixture<TypeabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeabsenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
