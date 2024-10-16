/*
  Warnings:

  - Added the required column `image1` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image2` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image3` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image4` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image5` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image6` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image7` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image8` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "image1" TEXT NOT NULL,
ADD COLUMN     "image2" TEXT NOT NULL,
ADD COLUMN     "image3" TEXT NOT NULL,
ADD COLUMN     "image4" TEXT NOT NULL,
ADD COLUMN     "image5" TEXT NOT NULL,
ADD COLUMN     "image6" TEXT NOT NULL,
ADD COLUMN     "image7" TEXT NOT NULL,
ADD COLUMN     "image8" TEXT NOT NULL;
