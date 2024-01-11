import { Module } from '@nestjs/common';
import { ArticleStatusService } from './article-status.service';
import { ArticleStatusController } from './article-status.controller';

@Module({
  controllers: [ArticleStatusController],
  providers: [ArticleStatusService]
})
export class ArticleStatusModule {}
