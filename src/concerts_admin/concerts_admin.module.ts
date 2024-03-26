import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConcertsAdminService } from './concerts_admin.service';
import { ConcertsAdminController } from './concerts_admin.controller';
import {ConcertsAdmin, ConcertsAdminSchema} from './schemas/concerts_admin.schema'
import { AccountsModule } from 'src/accounts/accounts.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConcertsAdmin.name, 
        schema: ConcertsAdminSchema
      }
    ]),
    AccountsModule
  ],
  controllers: [ConcertsAdminController],
  providers: [ConcertsAdminService],
  // exports: [ConcertsAdminService]
})

export class ConcertsAdminModule {}
