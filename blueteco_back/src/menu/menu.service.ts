import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service'
import { Menu } from '@prisma/client'
import { CreateMenuDto } from '../menu/dto/create-menu.dto'
import { UpdateMenuDto } from '../menu/dto/update-menu.dto'

@Injectable()
export class MenuService {
  constructor(private database: PrismaService){}

  async create (createMenu: CreateMenuDto): Promise<Menu> {
    const items = await this.database.menu.create({
      data: {
        ...createMenu
      }
    })

    return items
  }
}
