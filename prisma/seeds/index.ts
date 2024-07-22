import ColorSeed from './colors.seed';
import FilamentTypeSeed from './filament-type.seed';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

ColorSeed().then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})

FilamentTypeSeed().then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
