import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Producer, Prisma } from '@prisma/client';

@Injectable()
export class ProducerService {
  constructor(private prisma: PrismaService) {}

  async producer(
    producerWhereUniqueInput: Prisma.ProducerWhereUniqueInput
  ): Promise<Producer | null> {
    return this.prisma.producer.findUnique({
      where: producerWhereUniqueInput,
    });
  }

  async producers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ProducerWhereUniqueInput;
    where?: Prisma.ProducerWhereInput;
    orderBy?: Prisma.ProducerOrderByWithRelationInput;
  }): Promise<Producer[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.producer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createProducer(data: Prisma.ProducerCreateInput): Promise<Producer> {
    return this.prisma.producer.create({
      data,
    });
  }

  async updateProducer(params: {
    where: Prisma.ProducerWhereUniqueInput;
    data: Prisma.ProducerUpdateInput;
  }): Promise<Producer> {
    const { where, data } = params;
    return this.prisma.producer.update({
      data,
      where,
    });
  }

  async deleteProducer(where: Prisma.ProducerWhereUniqueInput): Promise<Producer> {
    return this.prisma.producer.delete({
      where,
    });
  }
}
