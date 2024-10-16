/*
  Warnings:

  - Added the required column `body` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doors` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eColor` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `engine` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iColor` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vin` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "doors" INTEGER NOT NULL,
ADD COLUMN     "eColor" TEXT NOT NULL,
ADD COLUMN     "engine" TEXT NOT NULL,
ADD COLUMN     "fuel" TEXT NOT NULL,
ADD COLUMN     "iColor" TEXT NOT NULL,
ADD COLUMN     "mileage" INTEGER NOT NULL,
ADD COLUMN     "transmission" TEXT NOT NULL,
ADD COLUMN     "vin" TEXT NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;
