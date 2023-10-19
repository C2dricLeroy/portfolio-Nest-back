import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyModule } from './resources/technology/technology.module';

@Module({
  imports: [TechnologyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
