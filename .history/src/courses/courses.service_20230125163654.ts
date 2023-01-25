import { Injectable } from '@nestjs/common';
import { Course } from './entities/courses.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: "Fundamentos do framework NestJS",
      description: "Fundamentos do framework NestJS",
      tags: ['node.js,', 'nestjs', 'javascript'],
    }
  ];
}
