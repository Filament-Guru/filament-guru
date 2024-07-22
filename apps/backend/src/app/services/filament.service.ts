import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Filament, Prisma } from '@prisma/client';

@Injectable()
export class FilamentService {
  constructor(private prisma: PrismaService) {}

  async filament(
    filamentWhereUniqueInput: Prisma.FilamentWhereUniqueInput
  ): Promise<Filament | null> {
    return this.prisma.filament.findUnique({
      where: filamentWhereUniqueInput,
    });
  }

  async filaments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FilamentWhereUniqueInput;
    where?: Prisma.FilamentWhereInput;
    orderBy?: Prisma.FilamentOrderByWithRelationInput;
  }): Promise<Filament[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.filament.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createFilament(data: Prisma.FilamentCreateInput): Promise<Filament> {
    return this.prisma.filament.create({
      data,
    });
  }

  async updateFilament(params: {
    where: Prisma.FilamentWhereUniqueInput;
    data: Prisma.FilamentUpdateInput;
  }): Promise<Filament> {
    const { where, data } = params;
    return this.prisma.filament.update({
      data,
      where,
    });
  }

  async deleteFilament(where: Prisma.FilamentWhereUniqueInput): Promise<Filament> {
    return this.prisma.filament.delete({
      where,
    });
  }
}
