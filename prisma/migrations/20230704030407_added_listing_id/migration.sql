-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "listingId" INTEGER NOT NULL DEFAULT floor(random() * 90000000) + 10000000;
