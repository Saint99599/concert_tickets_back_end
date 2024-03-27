import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateConcertsOverviewDto } from './dto/create-concerts_overview.dto';
import { UpdateConcertsOverviewDto } from './dto/update-concerts_overview.dto';
import { ConcertsOverview,ConcertsOverviewDocument } from './schemas/concerts_overview.schema';

@Injectable()
export class ConcertsOverviewService {
  constructor(
    @InjectModel(ConcertsOverview.name) private concertsOverviewModel: Model<ConcertsOverviewDocument>
  ) {}

  async updateTotalSeats(seats: number): Promise<ConcertsOverviewDocument> {
    try {
      const result = await this.concertsOverviewModel.findOneAndUpdate({}, 
        { $inc: { totalseats: seats } }, 
        { new: true, upsert: true }
      );
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteTotalSeats(seats: number): Promise<ConcertsOverviewDocument> {
    try {
      const result = await this.concertsOverviewModel.findOneAndUpdate({}, 
        { $inc: { totalseats: -seats } }, 
        { new: true, upsert: true }
      );
      return result
    } catch (error) {
      throw error
    }
  }

  async updateReserve(): Promise<ConcertsOverviewDocument> {
    try {
      const result = this.concertsOverviewModel.findOneAndUpdate({}, 
        { $inc: { reserve: 1 } }, 
        { new: true, upsert: true  }
      );
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteReserve(): Promise<ConcertsOverviewDocument> {
    try {
      const result = this.concertsOverviewModel.findOneAndUpdate({}, 
        { $inc: { reserve: -1 } }, 
        { new: true, upsert: true  }
      );
      return result
    } catch (error) {
      throw error
    }
  }

  async updateCancel(): Promise<ConcertsOverviewDocument> {
    try {
      const result = this.concertsOverviewModel.findOneAndUpdate({}, 
        { $inc: { cancel: 1 } }, 
        { new: true, upsert: true  }
      );
      return result
    } catch (error) {
      throw error
    }
  }

  async deleteCancel(): Promise<ConcertsOverviewDocument> {
    try {
      const result = this.concertsOverviewModel.findOneAndUpdate({}, 
        { $inc: { cancel: -1 } }, 
        { new: true, upsert: true  }
      );
      return result
    } catch (error) {
      throw error
    }
  }

  async getAll(): Promise<ConcertsOverview[]> {
    try {
      const result = await this.concertsOverviewModel.find().exec()
      return result
    } catch (error) {
      throw error
    }
  }

  async dropCollection(): Promise<any> {
    return this.concertsOverviewModel.collection.drop();
  }

  // create(createConcertsOverviewDto: CreateConcertsOverviewDto) {
  //   return 'This action adds a new concertsOverview';
  // }

  

  // findOne(id: number) {
  //   return `This action returns a #${id} concertsOverview`;
  // }

  // update(id: number, updateConcertsOverviewDto: UpdateConcertsOverviewDto) {
  //   return `This action updates a #${id} concertsOverview`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} concertsOverview`;
  // }
}
