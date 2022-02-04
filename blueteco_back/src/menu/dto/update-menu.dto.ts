import { IsString, IsUrl, IsNotEmpty, IsNumber, IsOptional } from "class-validator"; 
import { ApiProperty } from '@nestjs/swagger'

export class UpdateMenuDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  price: number;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  imageUrl: string;
}