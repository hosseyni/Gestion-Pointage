import { TestBed } from '@angular/core/testing';

import { AddabsenceService } from './addabsence.service';

describe('AddabsenceService', () => {
  let service: AddabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
