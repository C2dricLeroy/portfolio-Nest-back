import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnologyModule } from './resources/technology/technology.module';
import ProjectModule from './resources/project/project.module';
import { ContactModule } from './resources/contact/contact.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { LikesModule } from './resources/likes/likes.module';
import { ArticlesModule } from './resources/articles/articles.module';
import { ArticleStatusModule } from './resources/article-status/article-status.module';
import { ProjectStatusModule } from './resources/project-status/project-status.module';
import { UserModule } from './resources/user/user.module';

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

    LikesModule,

    ArticlesModule,

    ArticleStatusModule,

    ProjectStatusModule,

    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
