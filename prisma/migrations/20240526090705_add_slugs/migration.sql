/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Color` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `ColorType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Filament` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Filament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Filament" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Color_slug_key" ON "Color"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ColorType_slug_key" ON "ColorType"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Filament_slug_key" ON "Filament"("slug");
