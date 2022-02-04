import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma, task } from '@prisma/client';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() data: Prisma.taskCreateInput): Promise<task> {
    return this.taskService.create(data);
  }

  @Get()
  async findAll(): Promise<task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<task> {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.taskUpdateInput,
  ): Promise<task> {
    return this.taskService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<task> {
    return this.taskService.remove(+id);
  }
}
