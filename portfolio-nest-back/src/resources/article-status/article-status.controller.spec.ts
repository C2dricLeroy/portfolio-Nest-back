import { Test, TestingModule } from '@nestjs/testing';
import { ArticleStatusController } from './article-status.controller';
import { ArticleStatusService } from './article-status.service';

describe('ArticleStatusController', () => {
  let controller: ArticleStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleStatusController],
      providers: [ArticleStatusService],
    }).compile();

    controller = module.get<ArticleStatusController>(ArticleStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
