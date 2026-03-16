import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@generated/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
  @Patch(':id/welcome')
  async updateWelcomeStatus(
    @Param('id') id: string,
    @Body('hasSeenWelcome') hasSeenWelcome: boolean,
  ) {
    return this.userService.updateWelcomeStatus(id, hasSeenWelcome);
  }
  @Post(':userId/profile')
  async createUserProfile(
    @Param('userId') userId: string,
    @Body() createUserProfileDto: Prisma.UserProfileCreateInput,
  ) {
    return this.userService.createUserProfile(userId, createUserProfileDto);
  }
}
