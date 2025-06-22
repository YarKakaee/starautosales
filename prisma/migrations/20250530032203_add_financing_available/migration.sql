-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "financingAvailable" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "listingId" SET DEFAULT floor(random() * 90000000) + 10000000;
