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
import { Color as ColorModel } from '@prisma/client';
import { ColorService } from './services/color.service';

class ColorApiProperties {
  @ApiProperty({ example: 'extrudr' })
  slug: string;

  @ApiProperty({ example: 'extrudr' })
  name: string;
}

@ApiTags('color')
@Controller('color')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get(':id')
  async getColor(@Param('id') id: string): Promise<ColorModel> {
    return this.colorService.color({ id: Number(id) });
  }

  @Get()
  async getColors(): Promise<ColorModel[]> {
    return this.colorService.colors({});
  }

  @Post()
  async createColor(@Body() postData: ColorApiProperties): Promise<ColorModel> {
    const { name } = postData;
    const slug = name.replace(/\s+/g, '-').toLowerCase();
    return this.colorService.createColor({ name, slug });
  }

  @Put(':id')
  async updateColor(
    @Param('id') id: string,
    @Body() postData: ColorApiProperties
  ): Promise<ColorModel> {
    return this.colorService.updateColor({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete(':id')
  async deleteColor(@Param('id') id: string): Promise<ColorModel> {
    return this.colorService.deleteColor({ id: Number(id) });
  }
}
