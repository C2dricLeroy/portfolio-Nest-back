import { Injectable } from '@nestjs/common';
import { CreateArticleStatusDto } from './dto/create-article-status.dto';
import { UpdateArticleStatusDto } from './dto/update-article-status.dto';

@Injectable()
export class ArticleStatusService {
  create(createArticleStatusDto: CreateArticleStatusDto) {
    return 'This action adds a new articleStatus';
  }

  findAll() {
    return `This action returns all articleStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} articleStatus`;
  }

  update(id: number, updateArticleStatusDto: UpdateArticleStatusDto) {
    return `This action updates a #${id} articleStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} articleStatus`;
  }
}
