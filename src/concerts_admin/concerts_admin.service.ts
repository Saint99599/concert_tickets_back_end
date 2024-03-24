//logic
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateConcertsAdminDto } from './dto/create-concerts_admin.dto';
import { UpdateConcertsAdminDto } from './dto/update-concerts_admin.dto';
import {ConcertsAdmin, ConcertsAdminDocument} from './schemas/concerts_admin.schema'
import { error } from 'console';

@Injectable()
export class ConcertsAdminService {
  constructor(
    @InjectModel(ConcertsAdmin.name) private ConcertsAdminModel: Model<ConcertsAdminDocument>
  ) {}

  async create(createConcertsAdminDto: CreateConcertsAdminDto): Promise<ConcertsAdmin> {
    try {
      const result = new this.ConcertsAdminModel(createConcertsAdminDto)
      return result.save()
    } catch (error) {
      throw error
    }
  }

  async findAll(): Promise<ConcertsAdmin[]> {
    try {
      const result = await this.ConcertsAdminModel.find().exec()
      return result
    } catch (error) {
      throw error
    }
  }

  // async findOne(id: string): Promise<ConcertsAdmin> {
  //   return this.ConcertsAdminModel.findById(id).exec()
  // }

  // async update(
  //   id: string, 
  //   updateConcertsAdminDto: UpdateConcertsAdminDto
  // ): Promise<ConcertsAdmin> {
  //   const result = this.ConcertsAdminModel
  //     .findByIdAndUpdate(id, updateConcertsAdminDto, {new: true})
  //     .exec()
  //   return result
  // }

  async remove(name: string) {
    try {
      const result = await this.ConcertsAdminModel.findOneAndDelete({ name: name }).exec();
      if (!result) {
        throw new NotFoundException ('name not found')
      }
      return { message: 'Delete successful'}
    } catch (error) {
      throw error
    }
    
  }
}
