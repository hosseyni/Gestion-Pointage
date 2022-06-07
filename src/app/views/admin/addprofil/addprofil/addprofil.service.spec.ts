import { TestBed } from '@angular/core/testing';

import { AddprofilService } from './addprofil.service';

describe('AddprofilService', () => {
  let service: AddprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
