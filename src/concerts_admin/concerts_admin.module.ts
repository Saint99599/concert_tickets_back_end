import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConcertsAdminService } from './concerts_admin.service';
import { ConcertsAdminController } from './concerts_admin.controller';
import {ConcertsAdmin, ConcertsAdminSchema} from './schemas/concerts_admin.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ConcertsAdmin.name, 
        schema: ConcertsAdminSchema
      }
    ])
  ],
  controllers: [ConcertsAdminController],
  providers: [ConcertsAdminService],
})

export class ConcertsAdminModule {}
