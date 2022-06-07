import { TestBed } from '@angular/core/testing';

import { TypeabsenceService } from './typeabsence.service';

describe('TypeabsenceService', () => {
  let service: TypeabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
