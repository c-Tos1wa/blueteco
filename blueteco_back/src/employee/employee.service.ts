import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service'
import { Employee } from '@prisma/client'
import { CreateDto } from '../employee/dto/create-employee.dto'
import { UpdateDto } from '../employee/dto/update-employee.dto'
import { EmployeeDto } from '../employee/dto/employee.dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class EmployeeService {
  constructor(private database: PrismaService) {}

  async create( createEmployee: CreateDto): Promise<Employee> {
    const email = await this.database.employee.findUnique({
      where: {
        email: createEmployee.email
      },
    })
    
    if (email){
      throw new ConflictException('Este email já existe no cadastro')
    }

    if(createEmployee.password !== createEmployee.confirmPassword){
      throw new UnauthorizedException('As senhas não conferem. Tente novamente')
    }

    delete createEmployee.confirmPassword

    const passwordHash = await bcrypt.hash(createEmployee.password, 10);

    const user = await this.database.employee.create({
      data: {
        ...createEmployee,
        password: passwordHash
      }
    })

    delete createEmployee.password

    return user
    
  }

  async read(): Promise<EmployeeDto[]> {
    const users = await this.database.employee.findMany({
      select:{
        id: true,
        name: true,
        lastName: true,
        email: true,
        imageUrl: true,
        function: true,
      }
    }) 
    return users
  }

  async readSingle(dataId: string): Promise<Employee> {
    const uniqueUser = await this.database.employee.findUnique({
      where: {
        id: dataId
      }
    })
    if (!uniqueUser){
      throw new NotFoundException('Não existe funcionário com este id')
    }
    delete uniqueUser.password
    return uniqueUser
  }

  async update(id: string, updateEmployee: UpdateDto): Promise<Employee> {
    const found = await this.database.employee.findUnique({
      where: {
        id: id
      }
    })
    if (!found){
      throw new NotFoundException('Não foi encontrado funcionário com este id')
    }

    if(updateEmployee.email) {
      const emailExists = await this.database.employee.findUnique({
        where: {
          email: updateEmployee.email,
        }
      })
      if (emailExists){
        throw new ConflictException('Email existente no banco de dados. Tente com outro email')
      }
    }

    const updatedInfo = await this.database.employee.update({
      where: { id: id },
      data: {
        name: updateEmployee.name,
        lastName: updateEmployee.lastName,
        email: updateEmployee.email,
        birthDate: updateEmployee.birthDate,
        imageUrl: updateEmployee.imageUrl,
        function: updateEmployee.function
      }
    })
    delete updatedInfo.password

    return updatedInfo
  } 

  async deleted(id: string): Promise<Employee> {
    const userId = await this.database.employee.findUnique({
      where: {
        id: id
      }
    })
    if(!userId){
      throw new NotFoundException('Funcionário não encontrado')
    }
    const lostId = await this.database.employee.delete({
      where: {
        id: id
      }
    })
    delete lostId.password
    return lostId
  }

}




