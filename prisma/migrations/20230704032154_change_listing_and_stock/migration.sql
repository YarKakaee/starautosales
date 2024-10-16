/*
  Warnings:

  - The primary key for the `Car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Car" DROP CONSTRAINT "Car_pkey",
DROP COLUMN "id",
ADD COLUMN     "stockId" SERIAL NOT NULL,
ALTER COLUMN "listingId" SET DEFAULT floor(random() * 90000000) + 10000000,
ADD CONSTRAINT "Car_pkey" PRIMARY KEY ("listingId");
