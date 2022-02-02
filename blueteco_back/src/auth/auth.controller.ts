import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport'
import { Employee } from '@prisma/client';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto'
import { ResponseDto } from './dto/login-response.dto';
import { Logged } from './logged-decorator';
import { Request } from 'express';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Fazer login'
  })
  @Post()
  login(@Body() data: LoginDto): Promise<ResponseDto>{
    return this.authService.login(data)
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: "Mostrar usuário logado"
  })
  @ApiBearerAuth()
  show(@Logged() user: Employee) {
    return user
  }
}
