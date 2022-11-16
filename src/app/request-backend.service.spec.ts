import { TestBed } from '@angular/core/testing';

import { RequestBackendService } from './request-backend.service';

describe('RequestBackendService', () => {
  let service: RequestBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
