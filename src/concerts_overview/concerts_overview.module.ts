import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConcertsOverviewService } from './concerts_overview.service';
import { ConcertsOverviewController } from './concerts_overview.controller';
import { ConcertsOverview, ConcertsOverviewSchema } from './schemas/concerts_overview.schema';

import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConcertsOverview.name, 
        schema: ConcertsOverviewSchema
      }
    ]),
    AccountsModule
  ],
  controllers: [ConcertsOverviewController],
  providers: [ConcertsOverviewService],
  exports: [ConcertsOverviewService]
})
export class ConcertsOverviewModule {}
