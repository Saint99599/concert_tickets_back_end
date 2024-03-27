//ประกาศ Schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LogConcertDocument = LogConcert & Document

@Schema()
export  class LogConcert {
    @Prop({ required: true })
    datetime: Date;

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    productname: string;

    @Prop({ required: true })
    action: string;
}

export const LogConcertSchema = SchemaFactory.createForClass(LogConcert)