import { Controller, Get } from '@nestjs/common';
import { TechnologyService } from './technology.service';

@Controller('api/technology')
export class TechnologyController {
  technologyService = new TechnologyService();

  @Get('/getAll')
  async findAll() {
    return this.technologyService.findAll();
  }
}
