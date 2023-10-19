"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const email_service_1 = require("../email/email.service");
let ContactService = class ContactService {
    constructor(emailService) {
        this.emailService = emailService;
        this.prisma = new client_1.PrismaClient();
    }
    async newContact(body) {
        const response = await this.saveContact(body);
        if (response) {
            const formattedEmail = await this.formatMail(body);
            await this.emailService.sendEmail(formattedEmail);
        }
    }
    async saveContact(body) {
        const date = new Date();
        try {
            this.prisma.contact.create({
                data: {
                    contact_name: body.contact_name,
                    contact_email: body.contact_email,
                    contact_phone: body.contact_phone,
                    message: body.message,
                    date: date,
                },
            });
            return true;
        }
        catch (e) {
            throw new Error('Could not create contact');
        }
    }
    async formatMail(body) {
        const { message, contact_name, contact_email, contact_phone } = body;
        return `From ${contact_name} <${contact_email}>,
        Phone: ${contact_phone},
        Message: ${message}`;
    }
};
ContactService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map