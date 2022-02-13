import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { Menu, Employee, Table } from '@prisma/client';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from '../menu/dto/update-menu.dto'
import { MenuService } from './menu.service';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Logged } from 'src/auth/logged-decorator';

@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar itens do menu'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create
  (
    @Body() data: CreateMenuDto,
    @Logged() employee: Employee,
  ): Promise<Menu>{
    return this.menuService.create(data, employee.id)
  }

  @Get()
  @ApiOperation({
    summary: 'Listar itens do menu'
  })
  read(): Promise<Menu[]>{
    return this.menuService.read()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Lista item do menu pelo seu id'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  readOne(@Param('id', ParseIntPipe) id: number): Promise<Menu> {
    return this.menuService.readOne(id)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Alterar um item'
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateItem: UpdateMenuDto,
  ): Promise<Menu>{
    return this.menuService.update(id, updateItem)
  }
}
