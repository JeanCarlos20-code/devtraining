import { Controller, Get, Param } from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body) {
    return body;
  }
}
