import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses/courses.controller';

@Module({
  controllers: [CoursesController]
})
export class CoursesModule {}
