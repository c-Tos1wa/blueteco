import { IsNumber, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  quantity: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  price: number;
}