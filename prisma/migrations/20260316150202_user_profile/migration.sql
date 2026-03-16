/*
  Warnings:

  - You are about to drop the column `hasSeenWelcome` on the `UserProfile` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('F', 'M');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hasSeenWelcome" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "hasSeenWelcome",
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'M';
