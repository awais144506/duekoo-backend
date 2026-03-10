import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { ProgressModule } from './progress/progress.module';
import { CertificateModule } from './certificate/certificate.module';

@Module({
  imports: [UserModule, PrismaModule, CourseModule, ProgressModule, CertificateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
