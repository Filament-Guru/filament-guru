import { Test, TestingModule } from '@nestjs/testing';
import { FilamentController } from './filament.controller';
import { FilamentService } from './services/filament.service';
import { PrismaService } from './services/prisma.service';

describe('FilamentController', () => {
  let controller: FilamentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilamentController],
      providers: [FilamentService, PrismaService]
    }).compile();

    controller = module.get<FilamentController>(FilamentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
