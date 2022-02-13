import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Table } from '@prisma/client'
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TableService {
  constructor(private database: PrismaService){}

  async create(createTable: CreateTableDto, employeeId: string): Promise<Table>{
    const table = await this.database.table.create({
      data: {
        totalPrice: createTable.totalPrice,
        Employee: {
          connect: {
            id: employeeId
          }
        }
      }
    })
    return table
  }

  async read(): Promise<Table[]>{
    const showItAll = await this.database.table.findMany({
      include: {
        items: true
      }
    })
    return showItAll
  }

  async readOne(id: number): Promise<Table> {
    const table = await this.database.table.findUnique({
      where: { 
        id: id
      },
      include: {
        items: true
      }
    })

    if(!table){
      throw new NotFoundException('Item do menu não encontrado')
    }

    return await this.database.table.findUnique({
      where: {
        id: Number(id)
      }
    })
  }

  // async update(id: number, updateItem: UpdateTableDto): Promise<Table>{
  //   const tableId = await this.database.table.findUnique({
  //     where: {
  //       id: id
  //     }
  //   })

  //   if(!tableId){
  //     throw new NotFoundException('Mesa não encontrada')
  //   }

  //   const updateTable = await this.database.table.update({
  //     where: {
  //       id: Number(id)
  //     },
  //     data: updateItem
  //   })

  //   return updateTable
  // }
}
