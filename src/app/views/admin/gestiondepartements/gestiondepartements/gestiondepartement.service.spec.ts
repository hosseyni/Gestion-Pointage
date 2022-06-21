import { TestBed } from '@angular/core/testing';

import { GestiondepartementService } from './gestiondepartement.service';

describe('GestiondepartementService', () => {
  let service: GestiondepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestiondepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
