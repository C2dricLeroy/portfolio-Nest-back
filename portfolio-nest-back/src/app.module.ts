import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyModule } from './resources/technology/technology.module';
import ProjectModule from './resources/project/project.module';
import { ContactModule } from './resources/contact/contact.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    TechnologyModule,
    ProjectModule,
    ContactModule,

    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASS,
        },
      },
      defaults: {
        from: '"Cédric Leroy Portfolio" <pro.cedricleroy@gmail.com>',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
