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
import { ColorType as ColorTypeModel } from '@prisma/client';
import { ColorTypeService } from './services/color-type.service';

class ColorTypeApiProperties {
  @ApiProperty({ example: 'extrudr' })
  slug: string;

  @ApiProperty({ example: 'extrudr' })
  name: string;
}

@ApiTags('color-type')
@Controller('color-type')
export class ColorTypeController {
  constructor(private readonly colorTypeService: ColorTypeService) {}

  @Get(':id')
  async getColorType(@Param('id') id: string): Promise<ColorTypeModel> {
    return this.colorTypeService.colorType({ id: Number(id) });
  }

  @Get()
  async getColorTypes(): Promise<ColorTypeModel[]> {
    return this.colorTypeService.colorTypes({});
  }

  @Post()
  async createColorType(@Body() postData: ColorTypeApiProperties): Promise<ColorTypeModel> {
    const { name } = postData;
    const slug = name.replace(/\s+/g, '-').toLowerCase();
    return this.colorTypeService.createColorType({ name, slug });
  }

  @Put(':id')
  async updateColorType(
    @Param('id') id: string,
    @Body() postData: ColorTypeApiProperties
  ): Promise<ColorTypeModel> {
    return this.colorTypeService.updateColorType({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete(':id')
  async deleteColorType(@Param('id') id: string): Promise<ColorTypeModel> {
    return this.colorTypeService.deleteColorType({ id: Number(id) });
  }
}
