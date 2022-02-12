import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Employee } from '@prisma/client'
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from '../employee/dto/create-employee.dto'
import { UpdateEmployeeDto } from '../employee/dto/update-employee.dto'
import { EmployeeDto } from './dto/employee.dto';
import { Logged } from '../auth/logged-decorator'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiOperation({
    summary: 'Criar um usuário'
  })
  @Post()
  create(@Body() data: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(data);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os cadastrados'
  })
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard())
  read(): Promise<EmployeeDto[]> {
    return this.employeeService.read();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Listar somente um cadastrado'
  })
  @ApiBearerAuth()
  readSingle(@Param('id') dataId: string): Promise<Employee>{
    return this.employeeService.readSingle(dataId)
  }

  @Patch()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Alterar o usuário'
  })
  @ApiBearerAuth()
  update(
    @Logged() user: Employee, 
    @Body() data: UpdateEmployeeDto): Promise<Employee> 
  {
    return this.employeeService.update(user.id, data)
  }

  @Delete()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Deletar um usuário'
  })
  @ApiBearerAuth()
  deleted(@Logged() user: Employee): Promise<Employee> {
    return this.employeeService.deleted(user.id)
  }
}
