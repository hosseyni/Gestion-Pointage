import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilssalariesComponent } from './profilssalaries.component';

describe('ProfilssalariesComponent', () => {
  let component: ProfilssalariesComponent;
  let fixture: ComponentFixture<ProfilssalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilssalariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilssalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
