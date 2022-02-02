import {IsEmail, MinLength, IsNotEmpty, IsString} from 'class-validator'

export class Login {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string
}