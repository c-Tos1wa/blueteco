import { IsArray, IsOptional, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTableDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  totalPrice: number;

  @ApiProperty()
  @IsArray()
  items: [];
}