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
import { FilamentType as FilamentTypeModel } from '@prisma/client';
import { FilamentTypeService } from './services/filament-type.service';

class FilamentTypeApiProperties {
  @ApiProperty({ example: 'extrudr', description: 'The name of the producer' })
  name: string;

  @ApiProperty({ example: 'extrudr' })
  slug: string;
}

@ApiTags('filament-type')
@Controller('filament-type')
export class FilamentTypeController {
  constructor(private readonly filamentTypeService: FilamentTypeService) {}

  @Get(':id')
  async getFilamentType(@Param('id') id: string): Promise<FilamentTypeModel> {
    return this.filamentTypeService.filamentType({ id: Number(id) });
  }

  @Get()
  async getFilamentTypes(): Promise<FilamentTypeModel[]> {
    return this.filamentTypeService.filamentTypes({});
  }

  @Post()
  async createFilamentType(@Body() postData: FilamentTypeApiProperties): Promise<FilamentTypeModel> {
    const { name, slug } = postData;
    return this.filamentTypeService.createFilamentType({ name, slug });
  }

  @Put(':id')
  async updateFilamentType(
    @Param('id') id: string,
    @Body() postData: FilamentTypeApiProperties
  ): Promise<FilamentTypeModel> {
    return this.filamentTypeService.updateFilamentType({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete(':id')
  async deleteFilamentType(@Param('id') id: string): Promise<FilamentTypeModel> {
    return this.filamentTypeService.deleteFilamentType({ id: Number(id) });
  }
}
