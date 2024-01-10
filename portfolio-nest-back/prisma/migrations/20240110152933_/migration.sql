/*
  Warnings:

  - The primary key for the `ProjectStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status_id` on the `ProjectStatus` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_status_id_fkey";

-- DropIndex
DROP INDEX "Articles_status_id_key";

-- AlterTable
ALTER TABLE "ProjectStatus" DROP CONSTRAINT "ProjectStatus_pkey",
DROP COLUMN "status_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProjectStatus_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "ProjectStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
