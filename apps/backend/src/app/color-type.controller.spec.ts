import { Test, TestingModule } from '@nestjs/testing';
import { ColorTypeController } from './color-type.controller';
import { ColorTypeService } from './services/color-type.service';
import { PrismaService } from './services/prisma.service';

describe('FilamentTypeController', () => {
  let controller: ColorTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColorTypeController],
      providers: [ColorTypeService, PrismaService]
    }).compile();

    controller = module.get<ColorTypeController>(ColorTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
