import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { Accounts, AccountsSchema } from './schemas/accounts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([//Mongoose register at mongo
      {
        name: Accounts.name, 
        schema: AccountsSchema
      }
    ])
  ],
  controllers: [AccountsController],
  providers: [AccountsService, MongooseModule],
})

export class AccountsModule {}
