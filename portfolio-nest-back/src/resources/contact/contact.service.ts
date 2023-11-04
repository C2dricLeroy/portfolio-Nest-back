import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EmailService } from '../email/email.service';

type Email = {
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  message: string;
};

@Injectable()
export class ContactService {
  constructor(private readonly emailService: EmailService) {}
  prisma = new PrismaClient();

  async newContact(body: Email) {
    const response = await this.saveContact(body);

    if (response) {
      const formattedEmail = await this.formatMail(body);
      await this.emailService.sendEmail(formattedEmail);
    }
  }

  async saveContact(body: Email) {
    const date = new Date();

    try {
      return await this.prisma.contact.create({
        data: {
          contact_name: body.contact_name,
          contact_email: body.contact_email,
          contact_phone: body.contact_phone,
          message: body.message,
          date: date,
        },
      });
    } catch (e) {
      throw new Error('Could not create contact');
    }
  }

  async formatMail(body: Email) {
    const { message, contact_name, contact_email, contact_phone } = body;

    const htmlEmail = `
      <html lang="fr">
        <head>
          <style>
            /* Ajoutez ici votre CSS pour la mise en page du courriel */
          </style>
          <title>Mail</title>
        </head>
        <body>
          <h1>Formulaire de contact</h1>
          <p>De : ${contact_name} &lt;${contact_email}&gt;</p>
          <p>Téléphone : ${contact_phone}</p>
          <p>Message : ${message}</p>
        </body>
      </html>
    `;

    return {
      htmlEmail,
    };
  }
}
