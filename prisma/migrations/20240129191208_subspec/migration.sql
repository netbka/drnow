/*
  Warnings:

  - You are about to drop the `MedicalSpecs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Specs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MedicalSpecs";

-- DropTable
DROP TABLE "Specs";

-- CreateTable
CREATE TABLE "MedicalSpeciality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalSpeciality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicalSubSpeciality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "medicalSpecialityId" INTEGER NOT NULL,

    CONSTRAINT "MedicalSubSpeciality_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MedicalSubSpeciality" ADD CONSTRAINT "MedicalSubSpeciality_medicalSpecialityId_fkey" FOREIGN KEY ("medicalSpecialityId") REFERENCES "MedicalSpeciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
