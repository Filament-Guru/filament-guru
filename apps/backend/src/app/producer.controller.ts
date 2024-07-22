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
import { Producer as ProducerModel } from '@prisma/client';
import { ProducerService } from './services/producer.service';

class ProducerApiProperties {
  @ApiProperty({ example: 'extrudr', description: 'The name of the producer' })
  name: string;

  @ApiProperty({ example: 'extrudr' })
  slug: string;

  @ApiProperty({
    example: 'https://extrudr.com',
    description: 'The website of the producer',
  })
  url: string;
}

@ApiTags('producer')
@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get(':id')
  async getProducer(@Param('id') id: string): Promise<ProducerModel> {
    return this.producerService.producer({ id: Number(id) });
  }

  @Get()
  async getProducers(): Promise<ProducerModel[]> {
    return this.producerService.producers({});
  }

  @Post()
  async createProducer(@Body() postData: ProducerApiProperties): Promise<ProducerModel> {
    const { name, url } = postData;
    const slug = name.replace(/\s+/g, '-').toLowerCase();
    return this.producerService.createProducer({ name, url, slug });
  }

  @Put(':id')
  async updateProducer(
    @Param('id') id: string,
    @Body() postData: ProducerApiProperties
  ): Promise<ProducerModel> {
    return this.producerService.updateProducer({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete(':id')
  async deleteProducer(@Param('id') id: string): Promise<ProducerModel> {
    return this.producerService.deleteProducer({ id: Number(id) });
  }
}
