import { Module } from '@nestjs/common';

import { PrismaService } from './services/prisma.service';
import { ProducerService } from './services/producer.service';
import { ProducerController } from './producer.controller';
import { ColorController } from './color.controller';
import { FilamentTypeController } from './filament-type.controller';
import { FilamentController } from './filament.controller';
import { ColorTypeController } from './color-type.controller';
import { FilamentTypeService } from './services/filament-type.service';
import { FilamentService } from './services/filament.service';
import { ColorTypeService } from './services/color-type.service';
import { ColorService } from './services/color.service';

@Module({
  imports: [],
  controllers: [
    ProducerController,
    FilamentTypeController,
    ColorController,
    ColorTypeController,
    FilamentController,
  ],
  providers: [
    PrismaService,
    ProducerService,
    FilamentTypeService,
    ColorService,
    ColorTypeService,
    FilamentService,
  ],
})
export class AppModule {}
