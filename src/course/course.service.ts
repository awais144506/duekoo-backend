import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  async getSectionsByLevel(levelId: string) {
    return this.prisma.section.findMany({
      where: {
        levelId: levelId,
        visaType: 'STUDENT',
      },
    });
  }
  async getModulesBySections(sectionId: string) {
    return this.prisma.module.findMany({
      where: { sectionId: sectionId },
    });
  }
  async getPartsByModule(moduleId: string) {
    return this.prisma.part.findMany({
      where: { moduleId: moduleId },
      orderBy: { order: 'asc' },
    });
  }
}
