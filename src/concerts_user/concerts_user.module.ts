import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConcertsUserService } from './concerts_user.service';
import { ConcertsUserController } from './concerts_user.controller';
import { ConcertsUser, ConcertsUserSchema } from './schemas/concerts_user.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
    {
      name: ConcertsUser.name, 
      schema: ConcertsUserSchema
    }
  ]),
],
  controllers: [ConcertsUserController],
  providers: [ConcertsUserService],
})
export class ConcertsUserModule {}
