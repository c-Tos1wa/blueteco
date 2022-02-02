import { IsEmail, MinLength, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty()
  password: string
}