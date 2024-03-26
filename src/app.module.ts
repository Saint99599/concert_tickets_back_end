import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConcertsAdminModule } from './concerts_admin/concerts_admin.module';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/dataConcerts?authSource=admin'), 
    ConcertsAdminModule, 
    AccountsModule, 
    AuthModule],
  controllers: [AppController],
  providers: [AppService,]
})
export class AppModule {}
