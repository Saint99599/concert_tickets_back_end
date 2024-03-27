//ประกาศ Schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ConcertsUserDocument = ConcertsUser & Document

@Schema()
export  class ConcertsUser {
    @Prop({required: true, unique: true })
    username: string;

    @Prop({ required: true })
    his_conproduct: [{ productname: string; datetime: Date; action: string }];
}

export const ConcertsUserSchema = SchemaFactory.createForClass(ConcertsUser)