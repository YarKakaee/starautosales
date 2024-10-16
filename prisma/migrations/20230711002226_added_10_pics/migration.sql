/*
  Warnings:

  - Added the required column `image10` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image9` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "image10" TEXT NOT NULL,
ADD COLUMN     "image9" TEXT NOT NULL,
ALTER COLUMN "listingId" SET DEFAULT floor(random() * 90000000) + 10000000;
