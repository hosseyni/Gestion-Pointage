import { TestBed } from '@angular/core/testing';

import { AddprofilsalariesService } from './addprofilsalaries.service';

describe('AddprofilsalariesService', () => {
  let service: AddprofilsalariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprofilsalariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
