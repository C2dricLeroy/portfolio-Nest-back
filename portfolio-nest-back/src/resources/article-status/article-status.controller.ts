import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArticleStatusService } from './article-status.service';
import { CreateArticleStatusDto } from './dto/create-article-status.dto';
import { UpdateArticleStatusDto } from './dto/update-article-status.dto';

@Controller('article-status')
export class ArticleStatusController {
  constructor(private readonly articleStatusService: ArticleStatusService) {}

  @Post()
  create(@Body() createArticleStatusDto: CreateArticleStatusDto) {
    return this.articleStatusService.create(createArticleStatusDto);
  }

  @Get()
  findAll() {
    return this.articleStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleStatusDto: UpdateArticleStatusDto) {
    return this.articleStatusService.update(+id, updateArticleStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleStatusService.remove(+id);
  }
}
