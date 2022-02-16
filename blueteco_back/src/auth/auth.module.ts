import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma.service'
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '4h' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, jwtStrategy]
})
export class AuthModule {}
