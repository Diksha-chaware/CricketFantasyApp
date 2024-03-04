import { TestBed } from '@angular/core/testing';

import { UsermatchfixtureService } from './usermatchfixture.service';

describe('UsermatchfixtureService', () => {
  let service: UsermatchfixtureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsermatchfixtureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
