import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSpotRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}
