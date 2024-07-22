import { TestBed } from '@angular/core/testing';

import { AdminColorTypeService } from './color-type.service';

describe('AdminColorTypeService', () => {
  let service: AdminColorTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminColorTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
