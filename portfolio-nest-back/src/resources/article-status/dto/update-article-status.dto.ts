import { PartialType } from '@nestjs/swagger';
import { CreateArticleStatusDto } from './create-article-status.dto';

export class UpdateArticleStatusDto extends PartialType(CreateArticleStatusDto) {}
