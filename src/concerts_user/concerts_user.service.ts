import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { CreateConcertsUserDto } from './dto/create-concerts_user.dto';
import { UpdateConcertsUserDto } from './dto/update-concerts_user.dto';
import { ConcertsUser, ConcertsUserDocument } from './schemas/concerts_user.schema';
import { LogConcertsService } from 'src/log_concerts/log_concerts.service';
import { ConcertsOverviewService } from 'src/concerts_overview/concerts_overview.service';

@Injectable()
export class ConcertsUserService {
  constructor(
    @InjectModel(ConcertsUser.name) private concertsUserModel: Model<ConcertsUserDocument>,
    private readonly logService: LogConcertsService,
    private ConcertsOverviewService: ConcertsOverviewService
  ) {}

  async addProductToUser(username: string, productname: string, action: string): Promise<ConcertsUser> {
    try {
      const concertsUser = await this.concertsUserModel.findOneAndUpdate(
        { username },
        {
          $push: {
            his_conproduct: {
              productname,
              datetime: new Date(),
              action,
            },
          },
        },
        { new: true, upsert: true },
      );
      
      const ConcertsOverview = await this.ConcertsOverviewService.updateReserve()

      if (!ConcertsOverview) {
        throw new NotFoundException ('error some thing ConcertsOverview')
      }

      await this.logService.createLog(username, productname, action);

      return concertsUser;
    } catch (error) {
      throw error
    }
  }

  async deleteProductFromUser(username: string, productname: string): Promise<ConcertsUser> {
    try {
      const concertsUser = await this.concertsUserModel.findOneAndUpdate(
        { username },
        { $pull: { his_conproduct: { productname } } },
        { new: true },
      );
      
      const resDeleteReserve = await this.ConcertsOverviewService.deleteReserve()
      const resUpdateCancel = await this.ConcertsOverviewService.updateCancel()
      if (resDeleteReserve === null && resUpdateCancel === null) {
        throw new NotFoundException('Error: something went wrong with ConcertsOverview');
      }
      
      await this.logService.createLog(username, productname, 'delete');

      return concertsUser;
    } catch (error) {
      throw error
    }
  }

  async findAll(): Promise<ConcertsUser[]> {
    try {
      const result = await this.concertsUserModel.find().exec()
      return result
    } catch (error) {
      throw error
    }
  }

  async findOne(username: string): Promise<ConcertsUser> {
    console.log("username",username)
    return await this.concertsUserModel.findOne({ username }).exec();
  }
}
