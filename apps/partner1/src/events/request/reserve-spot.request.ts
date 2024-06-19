import { TicketKind } from '@prisma/client';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsIn,
  IsString,
} from 'class-validator';

export class ReserveSpotRequest {
  @ArrayNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  spots: string[];
  @IsString()
  @IsIn(['half', 'full'])
  ticket_kind: TicketKind;
  @IsString()
  @IsEmail()
  email: string;
}
