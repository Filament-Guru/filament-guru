import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Color, Prisma } from '@prisma/client';

@Injectable()
export class ColorService {
  constructor(private prisma: PrismaService) {}

  async color(
    colorWhereUniqueInput: Prisma.ColorWhereUniqueInput
  ): Promise<Color | null> {
    return this.prisma.color.findUnique({
      where: colorWhereUniqueInput,
    });
  }

  async colors(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ColorWhereUniqueInput;
    where?: Prisma.ColorWhereInput;
    orderBy?: Prisma.ColorOrderByWithRelationInput;
  }): Promise<Color[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.color.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createColor(data: Prisma.ColorCreateInput): Promise<Color> {
    return this.prisma.color.create({
      data,
    });
  }

  async updateColor(params: {
    where: Prisma.ColorWhereUniqueInput;
    data: Prisma.ColorUpdateInput;
  }): Promise<Color> {
    const { where, data } = params;
    return this.prisma.color.update({
      data,
      where,
    });
  }

  async deleteColor(where: Prisma.ColorWhereUniqueInput): Promise<Color> {
    return this.prisma.color.delete({
      where,
    });
  }
}
