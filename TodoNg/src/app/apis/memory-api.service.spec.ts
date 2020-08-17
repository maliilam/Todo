import { TestBed } from '@angular/core/testing';

import { MemoryApiService } from './memory-api.service';

describe('MemoryApiService', () => {
  let service: MemoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
