/*
  Warnings:

  - You are about to drop the column `passportNum` on the `UserProfile` table. All the data in the column will be lost.
  - The `program` column on the `UserProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Programs" AS ENUM ('CS', 'BUSINESS', 'ENGINEER', 'SOCIAL', 'NATURAL');

-- DropIndex
DROP INDEX "UserProfile_passportNum_key";

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "passportNum",
DROP COLUMN "program",
ADD COLUMN     "program" "Programs" NOT NULL DEFAULT 'CS';
