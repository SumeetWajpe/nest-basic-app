import { Controller, Get } from '@nestjs/common';

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
}
