import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ConcertsOverviewService } from './concerts_overview.service';
import { CreateConcertsOverviewDto } from './dto/create-concerts_overview.dto';
import { UpdateConcertsOverviewDto } from './dto/update-concerts_overview.dto';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/accounts/strategies/admin.guard';
import { Roles } from 'src/accounts/strategies/roles.decorator';

@Controller('concerts_overview')
export class ConcertsOverviewController {
  constructor(private readonly concertsOverviewService: ConcertsOverviewService) {}

  // @UseGuards(AuthGuard(), AdminGuard)
  // @Roles('admin')
  @Post('updateTotalSeats')
  async updateTotalSeats(@Body() updateConcertsOverviewDto: UpdateConcertsOverviewDto) {
    const { totalseats } = updateConcertsOverviewDto; // รับค่า totalseats จาก DTO object
    return this.concertsOverviewService.updateTotalSeats(totalseats); // ส่งค่า totalseats ไปยังฟังก์ชัน updateTotalSeats() ของ concertsOverviewService
  }

  // @UseGuards(AuthGuard(), AdminGuard)
  // @Roles('admin')
  @Post('updateReserve')
  async updateReserve() {
    return this.concertsOverviewService.updateReserve();
  }

  // @UseGuards(AuthGuard(), AdminGuard)
  // @Roles('admin')
  @Get()
  async getAll() {
    return this.concertsOverviewService.getAll();
  }

  // @UseGuards(AuthGuard(), AdminGuard)
  // @Roles('admin')
  @Delete()
  async dropCollection() {
    return this.concertsOverviewService.dropCollection();
  }
}
