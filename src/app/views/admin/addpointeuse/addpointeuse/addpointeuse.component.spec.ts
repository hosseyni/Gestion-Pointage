import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpointeuseComponent } from './addpointeuse.component';

describe('AddpointeuseComponent', () => {
  let component: AddpointeuseComponent;
  let fixture: ComponentFixture<AddpointeuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpointeuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpointeuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
