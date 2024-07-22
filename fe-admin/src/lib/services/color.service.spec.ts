import { TestBed } from '@angular/core/testing';

import { AdminColorService } from './color.service';

describe('AdminBrandService', () => {
  let service: AdminColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
