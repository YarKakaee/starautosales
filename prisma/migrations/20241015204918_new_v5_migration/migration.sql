-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "listingId" SET DEFAULT floor(random() * 90000000) + 10000000;
