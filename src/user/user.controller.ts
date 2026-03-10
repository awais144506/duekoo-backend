import { Controller, Get, Post, Body } from '@nestjs/common';
import { Prisma } from '@generated/prisma';
@Controller('user')
export class UserController {
  @Get()
  findAll() {
    return ["Awaiss"];
  }
}
