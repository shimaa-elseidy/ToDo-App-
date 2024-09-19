import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { blankgaurdGuard } from './blankgaurd.guard';

describe('blankgaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blankgaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
