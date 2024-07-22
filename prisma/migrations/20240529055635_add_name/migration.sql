/*
  Warnings:

  - Added the required column `name` to the `Color` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ColorType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Diameter" ADD VALUE 'MM350';

-- AlterTable
ALTER TABLE "Color" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ColorType" ADD COLUMN     "name" TEXT NOT NULL;
