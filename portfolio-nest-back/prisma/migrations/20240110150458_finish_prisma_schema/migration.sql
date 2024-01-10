/*
  Warnings:

  - You are about to drop the column `category_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_status_id_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "category_id";

-- DropTable
DROP TABLE "Status";

-- CreateTable
CREATE TABLE "ProjectStatus" (
    "status_id" SERIAL NOT NULL,
    "status_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "ProjectStatus_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "ArticlesStatus" (
    "status_id" SERIAL NOT NULL,
    "status_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "ArticlesStatus_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "comment_id" SERIAL NOT NULL,
    "comment_content" VARCHAR(5000) NOT NULL,
    "article_id" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "Likes" (
    "like_id" SERIAL NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("like_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Articles" (
    "article_id" SERIAL NOT NULL,
    "link" VARCHAR(500) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" VARCHAR(10000) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_id" INTEGER NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("article_id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "ProjectStatus"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "Articles"("article_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "ArticlesStatus"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;
