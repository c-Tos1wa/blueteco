import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from '../prisma.service'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [MenuController],
  providers: [MenuService, PrismaService]
})
export class MenuModule {}
