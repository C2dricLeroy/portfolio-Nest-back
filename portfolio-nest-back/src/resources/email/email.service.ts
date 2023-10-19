import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(email_message: string) {
    const mailOptions = {
      to: 'pro.cedricleroy@gmail.com',
      subject: 'Message from portfolio-nest-back',
      text: email_message,
    };

    await this.mailerService.sendMail(mailOptions);
  }
}
