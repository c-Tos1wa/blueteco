import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service'
import { Menu, Employee } from '@prisma/client'
import { CreateMenuDto } from '../menu/dto/create-menu.dto'
import { UpdateMenuDto } from '../menu/dto/update-menu.dto'

@Injectable()
export class MenuService {
  constructor(private database: PrismaService){}

  async create(createMenuDto: CreateMenuDto): Promise<Menu>{
    
    const items = await this.database.menu.create({
      data: {
        ...createMenuDto,
      }
    })
    return items
  }

  async read(): Promise<Menu[]>{
    const getAll = await this.database.menu.findMany()
    return getAll
  }

  async readOne(id: number): Promise<Menu> {
    const item = await this.database.menu.findUnique({
      where: { 
        id: id
      }
    })

    if(!item){
      throw new NotFoundException('Item do menu não encontrado')
    }

    const oneItem = await this.database.menu.findUnique({
      where: {
        id: Number(id)
      }
    })
    return oneItem
  }

  async update(id: number, updatedItem: UpdateMenuDto): Promise<Menu>{
    const foundID = await this.database.menu.findUnique({
      where: { id }
    })

    if (!foundID){
      throw new NotFoundException('O id deste item não foi encotrado')
    }

    const updateItem = await this.database.menu.update({
      where: {
        id: Number(id),
      },
      data: updatedItem
    })
    return updateItem
  }

  // async retrieve(id: number): Promise<Menu>{
  //   const itemId = await this.database.menu.findUnique({
  //     where: { id }
  //   })
  //   if(!itemId){
  //     throw new NotFoundException('Item não encontrado')
  //   }

  // }



}