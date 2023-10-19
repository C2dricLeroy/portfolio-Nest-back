import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class EmailDto {
  @ApiProperty({ description: 'Nom du contact', required: true })
  @IsString()
  contact_name: string;

  @ApiProperty({ description: 'Adresse e-mail du contact', required: true })
  @IsEmail()
  contact_email: string;

  @ApiProperty({ description: 'Numéro de téléphone du contact' })
  @IsString()
  @IsOptional()
  contact_phone: string;

  @ApiProperty({ description: 'Message du contact', required: true })
  @IsString()
  message: string;
}
