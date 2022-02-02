import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service'
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto'
import { ResponseDto } from './dto/login-response.dto'


@Injectable()
export class AuthService {
  constructor(
    private database: PrismaService,
    private jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto): Promise<ResponseDto> {
    const { email, password } = loginDto;

    const validUser = await this.database.employee.findUnique({
      where: { email }
    })

    if (!validUser){
      throw new NotFoundException('Não foi possível encontrar este funcionário')
    }

    const validHash = await bcrypt.compare(password, validUser.password);
    if(!validHash){
      throw new UnauthorizedException('Credenciais inválidas');
    }

    delete validUser.password

    return {
      token: this.jwtService.sign({ email }),
      employee: validUser,
    }
  }
}
