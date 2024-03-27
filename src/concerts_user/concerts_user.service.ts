import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateConcertsUserDto } from './dto/create-concerts_user.dto';
import { UpdateConcertsUserDto } from './dto/update-concerts_user.dto';

@Injectable()
export class ConcertsUserService {
  create(createConcertsUserDto: CreateConcertsUserDto) {
    return 'This action adds a new concertsUser';
  }

  // findAll() {
  //   return `This action returns all concertsUser`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} concertsUser`;
  // }

  // update(id: number, updateConcertsUserDto: UpdateConcertsUserDto) {
  //   return `This action updates a #${id} concertsUser`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} concertsUser`;
  // }
}
