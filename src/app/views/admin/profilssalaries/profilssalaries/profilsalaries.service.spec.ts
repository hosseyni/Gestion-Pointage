import { TestBed } from '@angular/core/testing';

import { ProfilsalariesService } from './profilsalaries.service';

describe('ProfilsalariesService', () => {
  let service: ProfilsalariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilsalariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
