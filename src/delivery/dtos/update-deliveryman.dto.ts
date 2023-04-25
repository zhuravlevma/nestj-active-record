import { IsString, IsOptional } from 'class-validator';

export class UpdateDeliverymanDto {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @IsString()
  @IsOptional()
  isActive?: boolean;
}
