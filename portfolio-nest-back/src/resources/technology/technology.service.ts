import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TechnologyService {
  prisma = new PrismaClient();

  async findAll() {
    return this.prisma.technology.findMany();
  }
}
