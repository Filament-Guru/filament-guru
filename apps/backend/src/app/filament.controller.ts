import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Diameter, Filament as FilamentModel } from '@prisma/client';
import { FilamentService } from './services/filament.service';

class FilamentApiProperties {
  @ApiProperty({ example: 'extrudr xpetg' })
  name: string;

  @ApiProperty({ example: 'extrudr xpetg' })
  slug: string;

  @ApiProperty({ example: 'blue' })
  color: string

  @ApiProperty({ example: 'glow' })
  colorType: string

  @ApiProperty({ example: '250, 500, 1000' })
  weights: number[]

  @ApiProperty({ example: 'MM178' })
  diameter: Diameter

  producer: {
    create: any;
    connect: {
      id: number;
    };
  };

  type: {
    create: any;
    connect: {
      id: number;
    };
  };
}

@ApiTags('filament')
@Controller('filament')
export class FilamentController {
  constructor(private readonly filamentService: FilamentService) {}

  @Get(':id')
  async getFilament(@Param('id') id: string): Promise<FilamentModel> {
    return this.filamentService.filament({ id: Number(id) });
  }

  @Get()
  async getFilaments(): Promise<FilamentModel[]> {
    return this.filamentService.filaments({});
  }

  @Post()
  async createFilament(@Body() postData: FilamentApiProperties): Promise<FilamentModel> {
    const { name, color, colorType, weights, diameter, producer, type, slug } = postData;
    const replacedSlug = slug.replace(' ', '-');
    return this.filamentService.createFilament({ name, color, colorType, weights, diameter, producer, type, slug: replacedSlug });
  }

  @Put(':id')
  async updateFilament(
    @Param('id') id: string,
    @Body() postData: FilamentApiProperties
  ): Promise<FilamentModel> {
    return this.filamentService.updateFilament({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete(':id')
  async deleteFilament(@Param('id') id: string): Promise<FilamentModel> {
    return this.filamentService.deleteFilament({ id: Number(id) });
  }
}
