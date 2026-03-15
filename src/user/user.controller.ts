import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll() {
    return this.userService.findAll();
  }
  @Get('profile')
  async findAllProfiles() {
    return this.userService.findAllProfiles();
  }
  @Post()
  async create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }
  @Post(':userId/profile')
  async createUserProfile(
    @Param('userId') userId: string,
    @Body() createUserProfileDto: Prisma.UserProfileCreateInput,
  ) {
    return this.userService.createUserProfile(userId, createUserProfileDto);
  }
}
