import { TestBed } from '@angular/core/testing';

import { ApiTestService } from './api.service';

describe('ApiService', () => {
  let service: ApiTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
