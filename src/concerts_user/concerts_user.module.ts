import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConcertsUserService } from './concerts_user.service';
import { ConcertsUserController } from './concerts_user.controller';
import { ConcertsUser, ConcertsUserSchema } from './schemas/concerts_user.schema';

import { LogConcertsModule } from 'src/log_concerts/log_concerts.module';
import { ConcertsOverviewModule } from 'src/concerts_overview/concerts_overview.module';
import { AccountsModule } from 'src/accounts/accounts.module';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConcertsUser.name, 
        schema: ConcertsUserSchema
      }
    ]),
    LogConcertsModule,
    ConcertsOverviewModule,
    AccountsModule
  ],
  controllers: [ConcertsUserController],
  providers: [ConcertsUserService],
})
export class ConcertsUserModule {}
