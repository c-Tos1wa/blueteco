import { Employee } from '@prisma/client'
import { IsString, IsNotEmpty } from 'class-validator'

export class ResponseDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  employee: Employee;
}