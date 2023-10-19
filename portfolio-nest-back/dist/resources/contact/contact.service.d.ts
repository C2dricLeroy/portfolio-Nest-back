import { PrismaClient } from '@prisma/client';
import { EmailService } from '../email/email.service';
type Email = {
    contact_name: string;
    contact_email: string;
    contact_phone: string;
    message: string;
};
export declare class ContactService {
    private readonly emailService;
    constructor(emailService: EmailService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    newContact(body: Email): Promise<void>;
    saveContact(body: Email): Promise<boolean>;
    formatMail(body: Email): Promise<string>;
}
export {};
