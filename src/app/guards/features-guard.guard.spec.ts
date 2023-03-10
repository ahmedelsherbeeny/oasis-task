import { TestBed } from '@angular/core/testing';

import { FeaturesGuardGuard } from './features-guard.guard';

describe('FeaturesGuardGuard', () => {
  let guard: FeaturesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeaturesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
