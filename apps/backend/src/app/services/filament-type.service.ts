import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { FilamentType, Prisma } from '@prisma/client';

@Injectable()
export class FilamentTypeService {
  constructor(private prisma: PrismaService) {}

  async filamentType(
    filamentTypeWhereUniqueInput: Prisma.FilamentTypeWhereUniqueInput
  ): Promise<FilamentType | null> {
    return this.prisma.filamentType.findUnique({
      where: filamentTypeWhereUniqueInput,
    });
  }

  async filamentTypes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FilamentTypeWhereUniqueInput;
    where?: Prisma.FilamentTypeWhereInput;
    orderBy?: Prisma.FilamentTypeOrderByWithRelationInput;
  }): Promise<FilamentType[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.filamentType.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFilamentType(data: Prisma.FilamentTypeCreateInput): Promise<FilamentType> {
    return this.prisma.filamentType.create({
      data,
    });
  }

  async updateFilamentType(params: {
    where: Prisma.FilamentTypeWhereUniqueInput;
    data: Prisma.FilamentTypeUpdateInput;
  }): Promise<FilamentType> {
    const { where, data } = params;
    return this.prisma.filamentType.update({
      data,
      where,
    });
  }

  async deleteFilamentType(where: Prisma.FilamentTypeWhereUniqueInput): Promise<FilamentType> {
    return this.prisma.filamentType.delete({
      where,
    });
  }
}
