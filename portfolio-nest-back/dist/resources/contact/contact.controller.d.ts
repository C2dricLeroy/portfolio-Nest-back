import { ContactService } from './contact.service';
import { EmailDto } from './dto/contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    newContact(body: EmailDto): Promise<void>;
}
