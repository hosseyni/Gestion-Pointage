import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilscalendairesComponent } from './profilscalendaires.component';

describe('ProfilscalendairesComponent', () => {
  let component: ProfilscalendairesComponent;
  let fixture: ComponentFixture<ProfilscalendairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilscalendairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilscalendairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
