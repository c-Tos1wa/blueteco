import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    })
  }
  
  async validate(payload: { email: string }) {
    const authUser = await this.prisma.employee.findUnique({
      where: { email: payload.email}
    })

    if (!authUser) {
      throw new NotFoundException('Funcionário não encontrado ou não autenticado')
    }

    return authUser
  }
}