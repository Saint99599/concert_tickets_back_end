import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConcertsUserService } from './concerts_user.service';
import { CreateConcertsUserDto } from './dto/create-concerts_user.dto';
import { UpdateConcertsUserDto } from './dto/update-concerts_user.dto';

@Controller('concerts-user')
export class ConcertsUserController {
  constructor(private readonly concertsUserService: ConcertsUserService) {}

  // @Post()
  // create(@Body() createConcertsUserDto: CreateConcertsUserDto) {
  //   return this.concertsUserService.create(createConcertsUserDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.concertsUserService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateConcertsUserDto: UpdateConcertsUserDto) {
  //   return this.concertsUserService.update(+id, updateConcertsUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.concertsUserService.remove(+id);
  // }
}
