/*
  Warnings:

  - You are about to drop the column `category_id` on the `Articles` table. All the data in the column will be lost.
  - The primary key for the `ArticlesStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status_id` on the `ArticlesStatus` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[status_id]` on the table `Articles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Articles" DROP CONSTRAINT "Articles_status_id_fkey";

-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "category_id";

-- AlterTable
ALTER TABLE "ArticlesStatus" DROP CONSTRAINT "ArticlesStatus_pkey",
DROP COLUMN "status_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ArticlesStatus_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "ArticleCategories" (
    "article_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "ArticleCategories_pkey" PRIMARY KEY ("category_id","article_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Articles_status_id_key" ON "Articles"("status_id");

-- AddForeignKey
ALTER TABLE "ArticleCategories" ADD CONSTRAINT "ArticleCategories_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticleCategories" ADD CONSTRAINT "ArticleCategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "ArticlesStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
