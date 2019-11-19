import { TestBed } from '@angular/core/testing';

import { PokeDataService } from './poke-data.service';

describe('PokeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeDataService = TestBed.get(PokeDataService);
    expect(service).toBeTruthy();
  });
});
