import { Controller, Get, Param, Inject, UseGuards } from '@nestjs/common';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { CourseService } from './course.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller(':levelId')
export class CourseController {
  // Combine both into ONE constructor
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly courseService: CourseService,
  ) {}

  @Get('sections')
  async getSections(@Param('levelId') levelId: string) {
    return this.courseService.getSectionsByLevel(levelId);
  }

  @Get('sections/:sectionId/modules')
  async getModules(@Param('sectionId') sectionId: string) {
    return this.courseService.getModulesBySections(sectionId);
  }

  @Get('sections/:sectionId/modules/:moduleId/parts')
  async getParts(
    @Param('sectionId') sectionId: string,
    @Param('moduleId') moduleId: string,
  ) {
    console.log('DB HIT');
    return this.courseService.getPartsByModule(moduleId);
  }
}
