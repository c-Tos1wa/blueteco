/*
  Warnings:

  - Added the required column `quantity` to the `table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table" ADD COLUMN     "quantity" INTEGER NOT NULL;
