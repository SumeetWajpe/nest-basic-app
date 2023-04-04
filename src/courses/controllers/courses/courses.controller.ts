import { Body, Controller, Get, Param, Req, Res } from '@nestjs/common';

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
}
