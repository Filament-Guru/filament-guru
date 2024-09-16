import { TestBed } from '@angular/core/testing';

import { AdminColorService } from './color.service';
import { provideHttpClient } from '@angular/common/http';

describe('AdminBrandService', () => {
  let service: AdminColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(AdminColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
