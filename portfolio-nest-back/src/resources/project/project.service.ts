import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export default class ProjectService {
  prisma = new PrismaClient();

  async getProjects() {
    return await this.prisma.project.findMany();
  }
}
