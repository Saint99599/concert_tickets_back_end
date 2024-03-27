import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogConcertsService } from './log_concerts.service';
import { CreateLogConcertDto } from './dto/create-log_concert.dto';
import { UpdateLogConcertDto } from './dto/update-log_concert.dto';

@Controller('log_concerts')
export class LogConcertsController {
  constructor(private readonly logConcertsService: LogConcertsService) {}

  @Get()
  findAll() {
    return this.logConcertsService.findAll();
  }
}
