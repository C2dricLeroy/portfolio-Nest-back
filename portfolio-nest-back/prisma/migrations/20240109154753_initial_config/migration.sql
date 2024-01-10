-- CreateTable
CREATE TABLE "Contact" (
    "contact_id" SERIAL NOT NULL,
    "contact_name" VARCHAR(30) NOT NULL,
    "contact_email" VARCHAR(50) NOT NULL,
    "contact_phone" VARCHAR(14) NOT NULL,
    "message" VARCHAR(5000) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("contact_id")
);

-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "project_date_begin" TIMESTAMP(3) NOT NULL,
    "project_date_end" TIMESTAMP(3),
    "project_name" VARCHAR(255) NOT NULL,
    "project_description" VARCHAR(1000) NOT NULL,
    "project_url" VARCHAR(255) NOT NULL,
    "project_github" VARCHAR(255) NOT NULL,
    "project_image_path" VARCHAR(100) NOT NULL,
    "status_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "ProjectTechnology" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "technology_id" INTEGER NOT NULL,

    CONSTRAINT "ProjectTechnology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "technology_id" SERIAL NOT NULL,
    "technology_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("technology_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Status" (
    "status_id" SERIAL NOT NULL,
    "status_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("status_id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("project_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_technology_id_fkey" FOREIGN KEY ("technology_id") REFERENCES "Technology"("technology_id") ON DELETE RESTRICT ON UPDATE CASCADE;
