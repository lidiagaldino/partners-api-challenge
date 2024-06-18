import { TicketKind } from '@prisma/client';
import {
  ArrayContains,
  ArrayNotEmpty,
  IsEmail,
  IsIn,
  IsString,
} from 'class-validator';

export class ReserveSpotRequest {
  @ArrayNotEmpty()
  spots: string[];
  @IsString()
  @IsIn(['half', 'full'])
  ticket_kind: TicketKind;
  @IsString()
  @IsEmail()
  email: string;
}
