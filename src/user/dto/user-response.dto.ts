// src/user/dto/user-response.dto.ts
import { Expose } from '@nestjs/class-transformer';
import { Prisma } from '@generated/index';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  name: string | null;

  @Expose()
  imageUrl: string | null;

  @Expose()
  hasSeenWelcome: boolean;

  constructor(partial: Prisma.UserCreateInput) {
    this.id = partial.id as string;
    this.email = partial.email;
    this.name = partial.name ?? null;
    this.imageUrl = partial.imageUrl ?? null;
    this.hasSeenWelcome = partial.hasSeenWelcome ?? false;
  }
}
