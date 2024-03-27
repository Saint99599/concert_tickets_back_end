//request and response
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConcertsAdminService } from './concerts_admin.service';
import { CreateConcertsAdminDto } from './dto/create-concerts_admin.dto';
import { UpdateConcertsAdminDto } from './dto/update-concerts_admin.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/accounts/strategies/admin.guard';
import { Roles } from 'src/accounts/strategies/roles.decorator';

@Controller('concerts_admin')
export class ConcertsAdminController {
  constructor(private readonly concertsAdminService: ConcertsAdminService) {}

  @UseGuards(AuthGuard(), AdminGuard)
  @Roles('admin')
  @Post()
  create(@Body() createConcertsAdminDto: CreateConcertsAdminDto) {
    return this.concertsAdminService.create(createConcertsAdminDto);
  }

  @UseGuards(AuthGuard(), AdminGuard)
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

  @UseGuards(AuthGuard(), AdminGuard)
  @Roles('admin')
  @Delete()
  remove(@Body() createConcertsAdminDto: CreateConcertsAdminDto) {
    return this.concertsAdminService.remove(createConcertsAdminDto);
  }
}
