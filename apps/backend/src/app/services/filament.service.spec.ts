import { Test, TestingModule } from '@nestjs/testing';
import { FilamentService } from './filament.service';
import { PrismaService } from './prisma.service';

describe('FilamentService', () => {
  let service: FilamentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, FilamentService],
    }).compile();

    service = module.get<FilamentService>(FilamentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
