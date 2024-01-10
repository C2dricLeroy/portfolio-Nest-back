import { MailerService } from '@nestjs-modules/mailer';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email_message: { htmlEmail: string }) {
    const mailOptions = {
      to: 'pro.cedricleroy@gmail.com',
      subject: 'Message from portfolio-nest-back',
      text: email_message,
    };

    // @ts-ignore
    await this.mailerService.sendMail(mailOptions);
  }
}
