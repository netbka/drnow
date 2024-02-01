/*
  Warnings:

  - You are about to drop the column `bday` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `fname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "bday",
ADD COLUMN     "birthDay" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fname",
DROP COLUMN "lname",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;

-- CreateTable
CREATE TABLE "MedicalSpecs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalSpecs_pkey" PRIMARY KEY ("id")
);
