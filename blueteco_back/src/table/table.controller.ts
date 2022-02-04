import { Controller, Body, Post, Get, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { TableService } from './table.service';
import { AuthGuard } from '@nestjs/passport'
import { Table } from '@prisma/client'
import { CreateTableDto } from './dto/create-table.dto'
import { UpdateTableDto } from './dto/update-table.dto'
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger'

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post()
  @ApiOperation({
    summary: 'Abrir/Criar uma mesa'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create(@Body() data: CreateTableDto): Promise<Table> {
    return this.tableService.create(data)
  }

}
