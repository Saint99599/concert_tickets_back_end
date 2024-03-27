import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LogConcertsService } from './log_concerts.service';
import { CreateLogConcertDto } from './dto/create-log_concert.dto';
import { UpdateLogConcertDto } from './dto/update-log_concert.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/accounts/strategies/admin.guard';
import { Roles } from 'src/accounts/strategies/roles.decorator';

@Controller('log_concerts')
export class LogConcertsController {
  constructor(private readonly logConcertsService: LogConcertsService) {}

  @UseGuards(AuthGuard(), AdminGuard)
  @Roles('admin')
  @Get()
  findAll() {
    return this.logConcertsService.findAll();
  }
}
