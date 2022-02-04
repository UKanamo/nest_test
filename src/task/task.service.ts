import { Injectable } from '@nestjs/common';
import { Prisma, task } from '@prisma/client';
import { PrismaService } from './../prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.taskCreateInput): Promise<task> {
    return this.prisma.task.create({ data });
  }

  async findAll(): Promise<task[]> {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, data: Prisma.taskUpdateInput): Promise<task> {
    return this.prisma.task.update({
      where: { id: id },
      data,
    });
  }

  async remove(id: number): Promise<task> {
    return this.prisma.task.delete({
      where: { id: id },
    });
  }
}
