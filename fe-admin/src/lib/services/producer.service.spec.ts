import { TestBed } from '@angular/core/testing';

import { AdminProducerService } from './producer.service';

describe('AdminBrandService', () => {
  let service: AdminProducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
