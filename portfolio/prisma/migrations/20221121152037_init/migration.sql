-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "archive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "favourite" BOOLEAN NOT NULL DEFAULT false;
