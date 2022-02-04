import { IsNumber, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTableDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  quantity: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  price: number;
}