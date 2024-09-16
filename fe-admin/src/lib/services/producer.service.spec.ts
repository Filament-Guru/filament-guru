import { TestBed } from '@angular/core/testing';

import { AdminProducerService } from './producer.service';
import { provideHttpClient } from '@angular/common/http';

describe('AdminBrandService', () => {
  let service: AdminProducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(AdminProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
