-- AlterTable
ALTER TABLE "Articles" ALTER COLUMN "link" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "project_description" DROP NOT NULL,
ALTER COLUMN "project_url" DROP NOT NULL,
ALTER COLUMN "project_github" DROP NOT NULL,
ALTER COLUMN "project_image_path" DROP NOT NULL;
