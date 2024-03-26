import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateAccountDto } from './dto/create-account.dto';
import { LoginAccountDto } from './dto/login-account.dto';
import { Accounts, AccountsDocument } from './schemas/accounts.schema';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Accounts.name) 
    private AccountsModel: Model<AccountsDocument>,
    private jwtService: JwtService
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<{ token: string }> {
    try {
      const newUser = new this.AccountsModel(createAccountDto);
      const result = await newUser.save();
      const token = this.jwtService.sign({ id: result._id, username: result.username, role: result.role });
      return {token};
    } catch (error) {
      throw error;
    }
  }

  async findByUsername(username: string): Promise<AccountsDocument> {
    return await this.AccountsModel.findOne({ username }).exec();
  }

  // async CreateAccount(createAccountDto: CreateAccountDto): Promise<Accounts> {
  //   //hash
  //   const hashedPassword = await bcrypt.hash(createAccountDto.password, 13); // 13 คือจำนวนรอบของการเข้ารหัส

  //   try {
  //     const result = new this.AccountsModel({ ...createAccountDto, password: hashedPassword });
  //     return await result.save();
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  async LoginAccount(loginAccountDto: LoginAccountDto): Promise<{ token: string }> {
    try {
      // ค้นหาบัญชีผู้ใช้จากชื่อผู้ใช้หรืออีเมล์
      const user = await this.AccountsModel.findOne({ username: loginAccountDto.username });
      if (!user) {
        throw new UnauthorizedException('Invalid username'); // ไม่พบผู้ใช้
      }

      // เปรียบเทียบรหัสผ่านที่ผู้ใช้ป้อนกับรหัสผ่านที่ถูก hash
      const passwordMatch = await bcrypt.compare(loginAccountDto.password, user.password);
      
      const token = this.jwtService.sign({ id: user._id, username: user.username, role: user.role });

      if (passwordMatch) {
        return {token}; // รหัสผ่านตรงกัน
      } else {
        throw new UnauthorizedException('Invalid password');  // รหัสผ่านไม่ตรงกัน
      }
    } catch (error) {
      throw error;
    }
  }

  async findAllAccount(): Promise<Accounts[]> {
    try {
      const result = await this.AccountsModel.find().exec()
      return result
    } catch (error) {
      throw error
    }
  }
}
