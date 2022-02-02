import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Employee } from '@prisma/client'

export const Logged = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const employee = request.employee as Employee
    return employee
  }
)
