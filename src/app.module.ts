import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConcertsAdminModule } from './concerts_admin/concerts_admin.module';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ConcertsUserModule } from './concerts_user/concerts_user.module';
import { ConcertsOverviewModule } from './concerts_overview/concerts_overview.module';
import { LogConcertsModule } from './log_concerts/log_concerts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    MongooseModule.forRoot('mongodb://root:example@localhost:27017/dataConcerts?authSource=admin'), 
    ConcertsAdminModule, 
    AccountsModule, 
    AuthModule, 
    ConcertsUserModule, 
    ConcertsOverviewModule, LogConcertsModule
  ],
  controllers: [AppController],
  providers: [AppService,]
})
export class AppModule {}
