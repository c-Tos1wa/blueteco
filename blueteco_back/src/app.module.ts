import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { TableModule } from './table/table.module';


@Module({
  imports: [EmployeeModule, AuthModule, MenuModule, TableModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
