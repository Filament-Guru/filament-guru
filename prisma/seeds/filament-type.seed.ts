import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function main() {
  const pla = await prisma.filamentType.upsert({
    where: {slug: 'pla'},
    update: {},
    create: {
      name: 'PLA',
      slug: 'pla',
    }
  });

  const petg = await prisma.filamentType.upsert({
    where: {slug: 'petg'},
    update: {},
    create: {
      name: 'PETG',
      slug: 'petg',
    }
  });

  const abs = await prisma.filamentType.upsert({
    where: {slug: 'abs'},
    update: {},
    create: {
      name: 'ABS',
      slug: 'abs',
    }
  });

  const asa = await prisma.filamentType.upsert({
    where: {slug: 'asa'},
    update: {},
    create: {
      name: 'ASA',
      slug: 'asa',
    }
  });

  const tpu = await prisma.filamentType.upsert({
    where: {slug: 'tpu'},
    update: {},
    create: {
      name: 'TPU',
      slug: 'tpu',
    }
  });

  console.log({
    pla,
    petg,
    abs,
    asa,
    tpu,
  })
}
