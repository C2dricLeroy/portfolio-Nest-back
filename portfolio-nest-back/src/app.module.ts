import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyModule } from './resources/technology/technology.module';
import ProjectModule from './resources/project/project.module';
import { ContactModule } from './resources/contact/contact.module';

@Module({
  imports: [TechnologyModule, ProjectModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
