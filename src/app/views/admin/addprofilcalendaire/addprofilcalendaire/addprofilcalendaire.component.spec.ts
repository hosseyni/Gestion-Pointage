import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofilcalendaireComponent } from './addprofilcalendaire.component';

describe('AddprofilcalendaireComponent', () => {
  let component: AddprofilcalendaireComponent;
  let fixture: ComponentFixture<AddprofilcalendaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofilcalendaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofilcalendaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
