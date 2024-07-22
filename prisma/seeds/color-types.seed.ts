import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function main() {
  const metallisch = await prisma.colorType.upsert({
    where: {slug: 'metallisch'},
    update: {},
    create: {
      name: 'Metallisch',
      slug: 'metallisch',
    }
  });

  const schimmern = await prisma.colorType.upsert({
    where: {slug: 'schimmern'},
    update: {},
    create: {
      name: 'Schimmern',
      slug: 'schimmern',
    }
  });

  console.log({
    metallisch,
    schimmern,
  })
}
