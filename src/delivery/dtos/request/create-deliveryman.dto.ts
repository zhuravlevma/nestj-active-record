import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeliveryManDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
