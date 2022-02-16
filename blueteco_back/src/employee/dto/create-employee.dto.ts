import {IsEmail, IsUrl, IsString, IsDateString, MinLength, IsNotEmpty} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto{
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  confirmPassword: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  birthDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  ocupation: string;
}