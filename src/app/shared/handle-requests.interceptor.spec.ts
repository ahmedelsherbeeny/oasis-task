import { TestBed } from '@angular/core/testing';

import { HandleRequestsInterceptor } from './handle-requests.interceptor';

describe('HandleRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HandleRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HandleRequestsInterceptor = TestBed.inject(HandleRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
