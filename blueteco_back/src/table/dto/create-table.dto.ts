import { IsArray, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
  @IsNumber()
  @ApiProperty()
  totalPrice: number;

  @IsArray()
  @ApiProperty()
  items: [];


}