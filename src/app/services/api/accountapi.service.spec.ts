import { TestBed } from '@angular/core/testing';

import { AccountApiService } from './accountapi.service';

describe('AccountApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountApiService = TestBed.get(AccountApiService);
    expect(service).toBeTruthy();
  });
});
