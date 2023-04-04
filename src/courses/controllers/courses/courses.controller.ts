import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
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
  getCoursesById(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return { id };
  }

  @Post('newcourse')
  @UsePipes(new ValidationPipe())
  createCourse(@Body() courseData: CreateNewCourseDTO) {
    console.log(courseData);
    return {};
  }
}
