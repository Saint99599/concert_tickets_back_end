import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { Accounts, AccountsSchema } from './schemas/accounts.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forFeature([//Mongoose register at mongo
      {
        name: Accounts.name, 
        schema: AccountsSchema
      }
    ])
  ],
  controllers: [AccountsController],
  providers: [AccountsService, JwtStrategy],
  exports: [AccountsService, PassportModule]
})

export class AccountsModule {}
