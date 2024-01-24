/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "bday" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "fname" TEXT,
ADD COLUMN     "lname" TEXT;

-- CreateTable
CREATE TABLE "Specs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Specs_pkey" PRIMARY KEY ("id")
);
