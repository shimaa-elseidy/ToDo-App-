import { TestBed } from '@angular/core/testing';

import { BlankserviceService } from './blankservice.service';

describe('BlankserviceService', () => {
  let service: BlankserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlankserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
