import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Employee } from '@prisma/client'
import { EmployeeService } from './employee.service';
import { CreateDto } from '../employee/dto/create-employee.dto'
import { UpdateDto } from '../employee/dto/update-employee.dto'
import { EmployeeDto } from './dto/employee.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOperation({
    summary: 'Criar um usuário'
  })
  @Post()
  create(@Body() data: CreateDto): Promise<Employee> {
    return this.employeeService.create(data);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os cadastrados'
  })
  read(): Promise<EmployeeDto[]> {
    return this.employeeService.read();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar somente um cadastrado'
  })
  @ApiBearerAuth()
  readSingle(@Param('id') dataId: string): Promise<Employee>{
    return this.employeeService.readSingle(dataId)
  }

  @ApiOperation({
    summary: 'Alterar o usuário'
  })
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') dataId: string, @Body() data: UpdateDto): Promise<Employee> {
    return this.employeeService.update(dataId, data)
  }

  @ApiOperation({
    summary: 'Deletar um usuário'
  })
  @ApiBearerAuth()
  @Delete(':id')
  deleted(@Param('id') dataId: string): Promise<Employee> {
    return this.employeeService.deleted(dataId)
  }

  
}
