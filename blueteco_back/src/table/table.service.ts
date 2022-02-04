import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Table } from '@prisma/client'
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  constructor(private database: PrismaService){}

  async create(createTable: CreateTableDto): Promise<Table>{
    const table = await this.database.table.create({
      data: {
        ...createTable
      },
      include: {
        Menu: true,
        Employee: true
      }
    })
    return table
  }

}
