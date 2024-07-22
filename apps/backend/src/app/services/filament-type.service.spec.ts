import { Test, TestingModule } from '@nestjs/testing';
import { FilamentTypeService } from './filament-type.service';
import { PrismaService } from './prisma.service';

describe('FilamentTypeService', () => {
  let service: FilamentTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, FilamentTypeService],
    }).compile();

    service = module.get<FilamentTypeService>(FilamentTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
