import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Post('register')
  async register(@Body() registerDTO: CreateAccountDto) {
    return this.accountsService.create(registerDTO);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('/profice')
  // async getProfice(@Request() req) {
  //   // this.accountsService.findByUsername(username);
  //   return req
  // }

  // @Post('/signup')
  // CreateAccount(@Body() createAccountDto: CreateAccountDto) {
  //   return this.accountsService. CreateAccount(createAccountDto);
  // }

  @Post('/login')
  LoginAccount(@Body() loginAccountDto: LoginAccountDto) {
    return this.accountsService.LoginAccount(loginAccountDto);
  }

  // @Get()
  // findAllAccount() {
  //   return this.accountsService.findAllAccount();
  // }
}
