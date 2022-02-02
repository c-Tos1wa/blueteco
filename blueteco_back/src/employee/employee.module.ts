import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma.service'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, PrismaService]
})
export class EmployeeModule {}
