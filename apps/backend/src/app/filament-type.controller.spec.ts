import { Test, TestingModule } from '@nestjs/testing';
import { FilamentTypeController } from './filament-type.controller';
import { FilamentTypeService } from './services/filament-type.service';
import { PrismaService } from './services/prisma.service';

describe('FilamentTypeController', () => {
  let controller: FilamentTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilamentTypeController],
      providers: [FilamentTypeService, PrismaService]
    }).compile();

    controller = module.get<FilamentTypeController>(FilamentTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
