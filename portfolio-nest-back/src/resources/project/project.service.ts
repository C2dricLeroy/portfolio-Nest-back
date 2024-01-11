import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class ProjectService {
  prisma = new PrismaClient();

  async getProjects() {
    return await this.prisma.project.findMany({
      include: { project_status: true },
    });
  }

  async getProjectById(id: string) {
    return await this.prisma.project.findUnique({
      where: {
        project_id: +id,
      },
    });
  }
}
