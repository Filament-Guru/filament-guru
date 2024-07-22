import { TestBed } from '@angular/core/testing';

import { AdminFlavorGroupService } from './flavor-group.service';

describe('FlavorGroupService', () => {
  let service: AdminFlavorGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFlavorGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
