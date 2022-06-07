import { TestBed } from '@angular/core/testing';

import { AddusagerService } from './addusager.service';

describe('AddusagerService', () => {
  let service: AddusagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddusagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
