import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEventRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsNumber()
  price: number;
}
