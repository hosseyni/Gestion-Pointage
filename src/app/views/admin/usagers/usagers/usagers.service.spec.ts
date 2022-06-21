import { TestBed } from '@angular/core/testing';

import { UsagersService } from './usagers.service';

describe('UsagersService', () => {
  let service: UsagersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsagersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
