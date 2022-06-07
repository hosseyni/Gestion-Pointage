import { TestBed } from '@angular/core/testing';

import { HandkeysService } from './handkeys.service';

describe('HandkeysService', () => {
  let service: HandkeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandkeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
