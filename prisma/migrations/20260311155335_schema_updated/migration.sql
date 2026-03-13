/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `ModuleStatus` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[passportNum]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNo]` on the table `UserProfile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Level" ADD COLUMN     "deTitle" TEXT;

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "deTitle" TEXT;

-- AlterTable
ALTER TABLE "ModuleStatus" DROP COLUMN "isCompleted",
ADD COLUMN     "status" "ProgressStatus" NOT NULL DEFAULT 'LOCKED';

-- AlterTable
ALTER TABLE "Part" ADD COLUMN     "deTitle" TEXT;

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "deTitle" TEXT;

-- CreateTable
CREATE TABLE "SectionStatus" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sectionId" TEXT NOT NULL,
    "status" "ProgressStatus" NOT NULL DEFAULT 'LOCKED',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SectionStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartStatus" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "status" "ProgressStatus" NOT NULL DEFAULT 'LOCKED',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SectionStatus_userId_sectionId_key" ON "SectionStatus"("userId", "sectionId");

-- CreateIndex
CREATE UNIQUE INDEX "PartStatus_userId_partId_key" ON "PartStatus"("userId", "partId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_passportNum_key" ON "UserProfile"("passportNum");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_phoneNo_key" ON "UserProfile"("phoneNo");

-- AddForeignKey
ALTER TABLE "SectionStatus" ADD CONSTRAINT "SectionStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionStatus" ADD CONSTRAINT "SectionStatus_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartStatus" ADD CONSTRAINT "PartStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartStatus" ADD CONSTRAINT "PartStatus_partId_fkey" FOREIGN KEY ("partId") REFERENCES "Part"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
