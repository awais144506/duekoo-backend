import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@generated/client';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findAll() {
    return this.prisma.user.findMany();
  }
  async findById(id: string) {
    console.log('GET USER BY EMAIL: DB HIT');
    return this.prisma.user.findFirst({
      where: { id: id },
    });
  }
  async updateUserName(id: string, name: string) {
    const updateName = this.prisma.user.update({
      where: { id: id },
      data: {
        name: name,
      },
    });
    return (await updateName).name;
  }
  async findAllProfiles() {
    return this.prisma.userProfile.findMany();
  }

  async create(dto: Prisma.UserCreateInput) {
    console.log('CREATE NEW USER: DB HIT');
    return this.prisma.user.upsert({
      where: { email: dto.email },
      update: { name: dto.name, imageUrl: dto.imageUrl },
      create: {
        id: dto.id,
        email: dto.email,
        name: dto.name,
        imageUrl: dto.imageUrl,
      },
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

  async updateWelcomeStatus(userId: string, status: boolean) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { hasSeenWelcome: status },
    });
  }
}
