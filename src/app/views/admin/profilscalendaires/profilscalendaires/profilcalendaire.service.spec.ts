import { TestBed } from '@angular/core/testing';

import { ProfilcalendaireService } from './profilcalendaire.service';

describe('ProfilcalendaireService', () => {
  let service: ProfilcalendaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilcalendaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
