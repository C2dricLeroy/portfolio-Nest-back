import { Test, TestingModule } from '@nestjs/testing';
import { ArticleStatusService } from './article-status.service';

describe('ArticleStatusService', () => {
  let service: ArticleStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleStatusService],
    }).compile();

    service = module.get<ArticleStatusService>(ArticleStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
