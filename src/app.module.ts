import { Module } from '@nestjs/common';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { ProgressModule } from './progress/progress.module';
import { CertificateModule } from './certificate/certificate.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.NEXTAUTH_SECRET || 'fallback_secret_for_typing',
      signOptions: { expiresIn: '1d' },
    }),
    CacheModule.register({
      ttl: 5000,
      isGlobal: true,
    }),
    UserModule,
    PrismaModule,
    CourseModule,
    ProgressModule,
    CertificateModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [PassportModule, JwtStrategy],
})
export class AppModule {}
