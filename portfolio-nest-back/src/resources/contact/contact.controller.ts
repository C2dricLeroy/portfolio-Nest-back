import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { EmailDto } from './dto/contact.dto';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/new')
  async newContact(@Body() body: EmailDto) {
    return await this.contactService.newContact(body);
  }
}
