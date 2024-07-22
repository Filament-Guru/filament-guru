import { Test, TestingModule } from '@nestjs/testing';
import { ColorTypeService } from './color-type.service';
import { PrismaService } from './prisma.service';

describe('ColorTypeService', () => {
  let service: ColorTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, ColorTypeService],
    }).compile();

    service = module.get<ColorTypeService>(ColorTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
