import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Patch,
  NotFoundException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@generated/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserResponseDto } from './dto/user-response.dto';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  //GET ALL USERS FOR ADMIN
  @Get()
  async findAll() {
    return this.userService.findAll();
  }
  //GET ALL PROFILES FOR ADMIN
  @Get('profile')
  async findAllProfiles() {
    return this.userService.findAllProfiles();
  }
  //USER GETS ITS DATA FROM DB
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<UserResponseDto> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return new UserResponseDto(user);
  }
  //CREATE NEW USER IN DB AUTOMATTICALLY
  @Post()
  async create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }
  //IF USER UPDATED NAME
  @Patch(':id')
  async updateUserName(@Param('id') id: string, @Body('name') name: string) {
    return this.userService.updateUserName(id, name);
  }
  //CREATE THE USER NEW PROFILE
  @Post(':id/profile')
  async createUserProfile(
    @Param('id') id: string,
    @Body() createUserProfileDto: Prisma.UserProfileCreateInput,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }
  //IF USER SEEN WELCOME NOTE UPDATE THAT
  @Patch(':id/welcome')
  async updateWelcomeStatus(
    @Param('id') id: string,
    @Body('hasSeenWelcome') hasSeenWelcome: boolean,
  ) {
    return this.userService.updateWelcomeStatus(id, hasSeenWelcome);
  }
}
