import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliverymanDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
