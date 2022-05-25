import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondepartementsComponent } from './gestiondepartements.component';

describe('GestiondepartementsComponent', () => {
  let component: GestiondepartementsComponent;
  let fixture: ComponentFixture<GestiondepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
