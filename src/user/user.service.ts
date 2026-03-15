import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.user.findMany();
  }
  async findAllProfiles() {
    return this.prisma.userProfile.findMany();
  }

  async create(createUserDto: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async createUserProfile(
    userId: string,
    createUserProfile: Prisma.UserProfileCreateInput,
  ) {
    return this.prisma.userProfile.create({
      data: {
        ...createUserProfile,
        user: {
          connect: { id: userId },
        },
      },
    });
  }
}
