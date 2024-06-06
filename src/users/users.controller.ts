import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Get()
    async findAll(): Promise<User[]> {
      return await this.usersService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
      return await this.usersService.findOne(Number(id));
    }
  
    @Post()
    async create(@Body() user: User): Promise<void> {
      this.usersService.create(user);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() user: Partial<User>): Promise<void> {
      this.usersService.update(Number(id), user);
    }
  }
