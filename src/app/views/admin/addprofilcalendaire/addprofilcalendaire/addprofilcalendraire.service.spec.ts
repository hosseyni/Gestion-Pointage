import { TestBed } from '@angular/core/testing';

import { AddprofilcalendraireService } from './addprofilcalendraire.service';

describe('AddprofilcalendraireService', () => {
  let service: AddprofilcalendraireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddprofilcalendraireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
