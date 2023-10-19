import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyModule } from './resources/technology/technology.module';
import ProjectModule from './resources/project/project.module';

@Module({
  imports: [TechnologyModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
