import {IsEmail, IsUrl, IsString, IsDateString, IsOptional, IsNotEmpty} from 'class-validator'

export class UpdateDto{
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNotEmpty()
  @IsUrl()
  @IsOptional()
  imageUrl: string;

  @IsNotEmpty()
  @IsDateString()
  @IsOptional()
  birthDate: Date;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  function: string;
}