import { TestBed } from '@angular/core/testing';

import { SweetServiceService } from './sweet-service.service';

describe('SweetServiceService', () => {
  let service: SweetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
