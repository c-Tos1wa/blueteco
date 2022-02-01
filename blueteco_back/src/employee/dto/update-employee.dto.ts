import {IsEmail, IsUrl, IsString, IsDateString, IsOptional, IsNotEmpty} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  @IsOptional()
  imageUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  birthDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  function: string;
}