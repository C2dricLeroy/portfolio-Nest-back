-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "project_summary" VARCHAR(500),
ALTER COLUMN "project_description" SET DATA TYPE VARCHAR(2000);
