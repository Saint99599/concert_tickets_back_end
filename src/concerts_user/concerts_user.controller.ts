import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConcertsUserService } from './concerts_user.service';
import { CreateConcertsUserDto } from './dto/create-concerts_user.dto';
import { UpdateConcertsUserDto } from './dto/update-concerts_user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/accounts/strategies/admin.guard';
import { Roles } from 'src/accounts/strategies/roles.decorator';

@Controller('concerts_user')
export class ConcertsUserController {
  constructor(private readonly concertsUserService: ConcertsUserService) {}
  
  @UseGuards(AuthGuard())
  @Post('/reservet')
  async addProductToUser(@Body() createConcertsUserDto: CreateConcertsUserDto) {
    const res = createConcertsUserDto;
    console.log("res",res)
    return this.concertsUserService.addProductToUser(res.username, res.productname, res.action);
  }

  @UseGuards(AuthGuard())
  @Delete('/cancel')
  async deleteProductFromUser(@Body() createConcertsUserDto: CreateConcertsUserDto) {
    const res = createConcertsUserDto;
    return this.concertsUserService.deleteProductFromUser(res.username, res.productname);
  }

  @UseGuards(AuthGuard())
  @Get()
  async findAll() {
    return this.concertsUserService.findAll();
  }

  @UseGuards(AuthGuard())
  @Get(':username')
  async findOne(@Param('username') username: string) {
    return this.concertsUserService.findOne(username);
  }
}
