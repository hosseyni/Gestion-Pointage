import { TestBed } from '@angular/core/testing';

import { AddprofilacceesService } from './addprofilaccees.service';

describe('AddprofilacceesService', () => {
  let service: AddprofilacceesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprofilacceesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
