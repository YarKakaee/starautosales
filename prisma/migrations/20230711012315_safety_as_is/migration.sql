-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "safety" TEXT NOT NULL DEFAULT 'Certified',
ALTER COLUMN "listingId" SET DEFAULT floor(random() * 90000000) + 10000000;
