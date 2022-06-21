import { TestBed } from '@angular/core/testing';

import { AdddepartementService } from './adddepartement.service';

describe('AdddepartementService', () => {
  let service: AdddepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdddepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
