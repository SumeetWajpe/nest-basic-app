import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { CreateNewCourseDTO } from 'src/courses/dtos/newcourse.dto';

@Controller('courses')
export class CoursesController {
  @Get()
  getCourses() {
    return [
      { id: 1, title: 'React' },
      { id: 2, title: 'Redux' },
    ];
  }

  @Get('reviews')
  getReviews() {
    return [{ id: 1, content: 'That is good !' }];
  }

  @Get(':id')
  getCoursesById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }

  @Post('newcourse')
  createCourse(@Body() courseData: CreateNewCourseDTO) {
    console.log(courseData);
    return {};
  }
}
