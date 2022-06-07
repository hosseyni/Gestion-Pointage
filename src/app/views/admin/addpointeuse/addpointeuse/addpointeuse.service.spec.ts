import { TestBed } from '@angular/core/testing';

import { AddpointeuseService } from './addpointeuse.service';

describe('AddpointeuseService', () => {
  let service: AddpointeuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpointeuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
