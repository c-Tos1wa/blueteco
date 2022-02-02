import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { PassportModule } from '@nestjs/passport'
import { PrismaService } from '../prisma.service'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [TableController],
  providers: [TableService, PrismaService]
})
export class TableModule {}
