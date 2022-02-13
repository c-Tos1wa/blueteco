import { Controller, Body, Post, Get, ParseIntPipe, Param, UseGuards, Patch } from '@nestjs/common';
import { TableService } from './table.service';
import { AuthGuard } from '@nestjs/passport'
import { Table, Employee } from '@prisma/client'
import { CreateTableDto } from './dto/create-table.dto'
import { UpdateTableDto } from './dto/update-table.dto'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { UpdateMenuDto } from 'src/menu/dto/update-menu.dto';
import { Logged } from 'src/auth/logged-decorator';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post()
  @ApiOperation({
    summary: 'Abrir uma mesa'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create
  (
    @Body() data: CreateTableDto, 
    @Logged() employee: Employee,
  ): Promise<Table> {
    return this.tableService.create(data, employee.id)
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as mesas'
  })
  read(): Promise<Table[]>{
    return this.tableService.read()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar mesa pelo seu id'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  readOne(@Param('id', ParseIntPipe) id: number): Promise<Table> {
    return this.tableService.readOne(id)
  }

  // @Patch(':id')
  // @ApiOperation({
  //   summary: 'Alterar a mesa'
  // })
  // @ApiBearerAuth()
  // @UseGuards(AuthGuard())
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() data: UpdateTableDto
  //   ): Promise<Table>{
  //     return this.tableService.update(id, data)
  }

  
  


