import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogConcert,LogConcertDocument } from './schemas/log_concert.schema';

@Injectable()
export class LogConcertsService {
  constructor(@InjectModel(LogConcert.name) private logModel: Model<LogConcertDocument>) {}

  async createLog(username: string, productname: string, action: string): Promise<LogConcert> {
    const log = new this.logModel({
      datetime: new Date(),
      username,
      productname,
      action,
    });
    return await log.save();
  }

  async findAll(): Promise<LogConcert[]> {
    try {
      const result = await this.logModel.find().exec()

      return result
    } catch (error) {
      throw error
    }
  }
}
