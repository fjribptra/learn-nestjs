import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';

@Controller('tasks')
export class TasksController {
  @Get()
  listTasks() {
    return 'This action return all tasks'
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return body
  }

  @Get(':id')
  getTask(@Param('id') id: string) {
    return `Get only one #${id}`
  }
}
