import { TestBed } from '@angular/core/testing';

import { CurdSharedServiceService } from './curd-shared-service.service';

describe('CurdSharedServiceService', () => {
  let service: CurdSharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdSharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
