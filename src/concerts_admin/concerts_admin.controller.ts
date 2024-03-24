//request and response
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConcertsAdminService } from './concerts_admin.service';
import { CreateConcertsAdminDto } from './dto/create-concerts_admin.dto';
import { UpdateConcertsAdminDto } from './dto/update-concerts_admin.dto';

@Controller('concerts_admin')
export class ConcertsAdminController {
  constructor(private readonly concertsAdminService: ConcertsAdminService) {}

  @Post()
  create(@Body() createConcertsAdminDto: CreateConcertsAdminDto) {
    return this.concertsAdminService.create(createConcertsAdminDto);
  }

  @Get()
  findAll() {
    return this.concertsAdminService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.concertsAdminService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateConcertsAdminDto: UpdateConcertsAdminDto) {
  //   return this.concertsAdminService.update(id, updateConcertsAdminDto);
  // }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.concertsAdminService.remove(name);
  }
}
