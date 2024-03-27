import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConcertsUserService } from './concerts_user.service';
import { CreateConcertsUserDto } from './dto/create-concerts_user.dto';
import { UpdateConcertsUserDto } from './dto/update-concerts_user.dto';

@Controller('concerts_user')
export class ConcertsUserController {
  constructor(private readonly concertsUserService: ConcertsUserService) {}
  
  @Post('/reservet')
  async addProductToUser(@Body() createConcertsUserDto: CreateConcertsUserDto) {
    const res = createConcertsUserDto;
    console.log("res",res)
    return this.concertsUserService.addProductToUser(res.username, res.productname, res.action);
  }

  @Delete('/cancel')
  async deleteProductFromUser(@Body() createConcertsUserDto: CreateConcertsUserDto) {
    const res = createConcertsUserDto;
    return this.concertsUserService.deleteProductFromUser(res.username, res.productname);
  }

  @Get()
  async findAll() {
    return this.concertsUserService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.concertsUserService.findOne(username);
  }
}
