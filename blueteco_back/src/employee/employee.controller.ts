import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '@prisma/client'
import { CreateDto } from '../employee/dto/create-employee.dto'
import { UpdateDto } from '../employee/dto/update-employee.dto'
import { EmployeeDto } from './dto/employee.dto';

@Controller('user')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() data: CreateDto): Promise<Employee> {
    return this.employeeService.create(data);
  }

  @Get()
  read(): Promise<EmployeeDto[]> {
    return this.employeeService.read();
  }

  @Get(':id')
  readSingle(@Param('id') dataId: string): Promise<Employee>{
    return this.employeeService.readSingle(dataId)
  }

  @Patch(':id')
  update(@Param('id') dataId: string, @Body() data: UpdateDto): Promise<Employee> {
    return this.employeeService.update(dataId, data)
  }

  @Delete(':id')
  deleted(@Param('id') dataId: string): Promise<Employee> {
    return this.employeeService.deleted(dataId)
  }

  
}
