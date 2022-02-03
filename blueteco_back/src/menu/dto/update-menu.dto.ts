import { IsString, IsUrl, IsNotEmpty, IsNumber } from "class-validator"; 
import { ApiProperty } from '@nestjs/swagger'

export class UpdateMenuDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;
}