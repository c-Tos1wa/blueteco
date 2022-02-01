/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `createdAt` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `table` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `table` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "employee_name_key";

-- AlterTable
ALTER TABLE "employee" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "menu" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "table" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");
