import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateConcertsAdminDto } from './dto/create-concerts_admin.dto';
import { UpdateConcertsAdminDto } from './dto/update-concerts_admin.dto';
import {ConcertsAdmin, ConcertsAdminDocument} from './schemas/concerts_admin.schema'

@Injectable()
export class ConcertsAdminService {
  constructor(
    @InjectModel(ConcertsAdmin.name) private ConcertsAdminModel: Model<ConcertsAdminDocument>
  ) {}

  async create(createConcertsAdminDto: CreateConcertsAdminDto): Promise<ConcertsAdmin> {
    const result = new this.ConcertsAdminModel(createConcertsAdminDto)
    return result.save()
  }

  async findAll(): Promise<ConcertsAdmin[]> {
    return this.ConcertsAdminModel.find().exec()
  }

  async findOne(id: string): Promise<ConcertsAdmin> {
    return this.ConcertsAdminModel.findById(id).exec()
  }

  async update(
    id: string, 
    updateConcertsAdminDto: UpdateConcertsAdminDto
  ): Promise<ConcertsAdmin> {
    const result = this.ConcertsAdminModel
      .findByIdAndUpdate(id, updateConcertsAdminDto, {new: true})
      .exec()
    return result
  }

  async remove(id: string) {
    const result = await this.ConcertsAdminModel.findByIdAndDelete(id).exec()
    if (!result) {
      throw new NotFoundException ('id not found')
    }
    return { message: 'Delete successful'}
  }
}
