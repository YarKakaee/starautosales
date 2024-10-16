/*
  Warnings:

  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "model" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "seats" INTEGER NOT NULL;
