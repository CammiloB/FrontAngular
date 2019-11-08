import { TestBed } from '@angular/core/testing';

import { SpotiappService } from './spotiapp.service';

describe('SpotiappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotiappService = TestBed.get(SpotiappService);
    expect(service).toBeTruthy();
  });
});
