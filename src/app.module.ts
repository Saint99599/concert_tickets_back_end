import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { ConcertsAdminModule } from './concerts_admin/concerts_admin.module';
import { ConcertsAdminModule } from './concerts_admin/concerts_admin.module';
// import { AccountController } from './account/account.controller';
// import { AccountService } from './account/account.service';
// import { AccountModule } from './account/account.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  // imports: [ConcertsAdminModule],
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/dataConcerts?authSource=admin'), ConcertsAdminModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService,]
})
export class AppModule {}
