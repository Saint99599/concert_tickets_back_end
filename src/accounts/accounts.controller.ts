import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { LoginAccountDto } from './dto/login-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('/signup')
  CreateAccount(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService. CreateAccount(createAccountDto);
  }

  @Post('/login')
  LoginAccount(@Body() loginAccountDto: LoginAccountDto) {
    return this.accountsService. LoginAccount(loginAccountDto);
  }

  @Get()
  findAllAccount() {
    return this.accountsService.findAllAccount();
  }
}
