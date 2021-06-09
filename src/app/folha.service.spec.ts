import { TestBed } from '@angular/core/testing';

import { FolhaService } from './folha.service';

describe('FolhaService', () => {
  let service: FolhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
