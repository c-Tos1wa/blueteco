import {IsEmail, IsNotEmpty, IsString, IsUrl} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class EmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

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
  @IsUrl()
  imageUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  function: string;
}