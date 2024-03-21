import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConcertsAdminModule } from './concerts_admin/concerts_admin.module';
import { ConcertsAdminModule } from './concerts_admin/concerts_admin.module';

@Module({
  // imports: [ConcertsAdminModule],
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/dataConcerts?authSource=admin'), ConcertsAdminModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
