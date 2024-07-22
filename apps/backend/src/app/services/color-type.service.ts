import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ColorType, Prisma } from '@prisma/client';

@Injectable()
export class ColorTypeService {
  constructor(private prisma: PrismaService) {}

  async colorType(
    colorTypeWhereUniqueInput: Prisma.ColorTypeWhereUniqueInput
  ): Promise<ColorType | null> {
    return this.prisma.colorType.findUnique({
      where: colorTypeWhereUniqueInput,
    });
  }

  async colorTypes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ColorTypeWhereUniqueInput;
    where?: Prisma.ColorTypeWhereInput;
    orderBy?: Prisma.ColorTypeOrderByWithRelationInput;
  }): Promise<ColorType[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.colorType.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createColorType(data: Prisma.ColorTypeCreateInput): Promise<ColorType> {
    return this.prisma.colorType.create({
      data,
    });
  }

  async updateColorType(params: {
    where: Prisma.ColorTypeWhereUniqueInput;
    data: Prisma.ColorTypeUpdateInput;
  }): Promise<ColorType> {
    const { where, data } = params;
    return this.prisma.colorType.update({
      data,
      where,
    });
  }

  async deleteColorType(where: Prisma.ColorTypeWhereUniqueInput): Promise<ColorType> {
    return this.prisma.colorType.delete({
      where,
    });
  }
}
