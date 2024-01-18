import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
  prisma = new PrismaClient();
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return this.prisma.articles.findMany({
      include: {
        article_categories: {
          include: {
            category: true,
          },
        },
        article_status: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
