-- CreateEnum
CREATE TYPE "VisaType" AS ENUM ('STUDENT', 'WORK', 'FAMILY', 'VISIT');

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "specialization" TEXT,
ADD COLUMN     "visaType" TEXT;

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "specialization" TEXT,
ADD COLUMN     "visaType" TEXT;

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "visaType" "VisaType" NOT NULL DEFAULT 'STUDENT';
