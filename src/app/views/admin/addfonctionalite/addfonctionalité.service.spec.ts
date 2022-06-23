import { TestBed } from '@angular/core/testing';

import { AddfonctionalitéService } from './addfonctionalité.service';

describe('AddfonctionalitéService', () => {
  let service: AddfonctionalitéService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfonctionalitéService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
