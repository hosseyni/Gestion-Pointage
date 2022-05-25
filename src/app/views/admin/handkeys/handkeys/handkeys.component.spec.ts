import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandkeysComponent } from './handkeys.component';

describe('HandkeysComponent', () => {
  let component: HandkeysComponent;
  let fixture: ComponentFixture<HandkeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandkeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
