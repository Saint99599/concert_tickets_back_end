import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { LogConcertsService } from './log_concerts.service';
import { LogConcertsController } from './log_concerts.controller';
import { LogConcert, LogConcertSchema } from './schemas/log_concert.schema';

import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LogConcert.name, 
        schema: LogConcertSchema
      }
    ]),
    AccountsModule
  ],
  controllers: [LogConcertsController],
  providers: [LogConcertsService],
  exports: [LogConcertsService]
})
export class LogConcertsModule {}
