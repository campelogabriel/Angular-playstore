import { TestBed } from '@angular/core/testing';

import { ServiceGetGamesService } from './service-get-games.service';

describe('ServiceGetGamesService', () => {
  let service: ServiceGetGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGetGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
