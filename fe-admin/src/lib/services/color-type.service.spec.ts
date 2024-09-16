import { TestBed } from '@angular/core/testing';

import { AdminColorTypeService } from './color-type.service';
import { provideHttpClient } from '@angular/common/http';

describe('AdminColorTypeService', () => {
  let service: AdminColorTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(AdminColorTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
