/*
  Warnings:

  - The values [WORK] on the enum `VisaType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "VisaType_new" AS ENUM ('STUDENT', 'FAMILY', 'VISIT');
ALTER TABLE "public"."UserProfile" ALTER COLUMN "visaType" DROP DEFAULT;
ALTER TABLE "UserProfile" ALTER COLUMN "visaType" TYPE "VisaType_new" USING ("visaType"::text::"VisaType_new");
ALTER TYPE "VisaType" RENAME TO "VisaType_old";
ALTER TYPE "VisaType_new" RENAME TO "VisaType";
DROP TYPE "public"."VisaType_old";
ALTER TABLE "UserProfile" ALTER COLUMN "visaType" SET DEFAULT 'STUDENT';
COMMIT;

-- AlterTable
ALTER TABLE "Part" ADD COLUMN     "content" JSONB;
