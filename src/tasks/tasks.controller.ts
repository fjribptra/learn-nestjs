import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  taskService: TasksService

  constructor(public tasksService: TasksService) {}

  @Get()
  listTasks() {
    return this.tasksService.findAll()
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.create(body.title, body.description) 
  }

  @Get(':id')
  async getTask(@Param('id') id: string) {
    const task = await this.tasksService.findOne(id)
    if (!task) {
      throw new NotFoundException('Task not found')
    } else {
      return task
    }
  }
}
