import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function main() {
  const blau = await prisma.color.upsert({
    where: {slug: 'blau'},
    update: {},
    create: {
      name: 'Blau',
      slug: 'blau',
    }
  });

  const gelb = await prisma.color.upsert({
    where: {slug: 'gelb'},
    update: {},
    create: {
      name: 'Gelb',
      slug: 'gelb',
    }
  });

  const gruen = await prisma.color.upsert({
    where: {slug: 'gruen'},
    update: {},
    create: {
      name: 'Grün',
      slug: 'gruen',
    }
  });

  const rot = await prisma.color.upsert({
    where: {slug: 'rot'},
    update: {},
    create: {
      name: 'Rot',
      slug: 'rot',
    }
  });

  const orange = await prisma.color.upsert({
    where: {slug: 'orange'},
    update: {},
    create: {
      name: 'Orange',
      slug: 'orange',
    }
  });

  const lila = await prisma.color.upsert({
    where: {slug: 'lila'},
    update: {},
    create: {
      name: 'Lila',
      slug: 'lila',
    }
  });

  const pink = await prisma.color.upsert({
    where: {slug: 'pink'},
    update: {},
    create: {
      name: 'Pink',
      slug: 'pink',
    }
  });

  const braun = await prisma.color.upsert({
    where: {slug: 'braun'},
    update: {},
    create: {
      name: 'Braun',
      slug: 'braun',
    }
  });

  const weiß = await prisma.color.upsert({
    where: {slug: 'weiß'},
    update: {},
    create: {
      name: 'Weiß',
      slug: 'weiß',
    }
  });

  const schwarz = await prisma.color.upsert({
    where: {slug: 'schwarz'},
    update: {},
    create: {
      name: 'Schwarz',
      slug: 'schwarz',
    }
  });

  const grau = await prisma.color.upsert({
    where: {slug: 'grau'},
    update: {},
    create: {
      name: 'Grau',
      slug: 'grau',
    }
  });

  const mehrfarbig = await prisma.color.upsert({
    where: {slug: 'mehrfarbig'},
    update: {},
    create: {
      name: 'Mehrfarbig',
      slug: 'mehrfarbig',
    }
  });

  const transparent = await prisma.color.upsert({
    where: {slug: 'transparent'},
    update: {},
    create: {
      name: 'Transparent',
      slug: 'transparent',
    }
  });

  console.log({
    blau,
    gelb,
    gruen,
    rot,
    orange,
    lila,
    pink,
    braun,
    weiß,
    schwarz,
    grau,
    mehrfarbig,
    transparent,
  })
}
