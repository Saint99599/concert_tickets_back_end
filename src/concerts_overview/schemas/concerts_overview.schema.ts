//ประกาศ Schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ConcertsOverviewDocument = ConcertsOverview & Document

@Schema()
export  class ConcertsOverview {
    @Prop({required: true, default: 0})
    totalseats: number
    
    @Prop({required: true, default: 0})
    reserve: number
    
    @Prop({required: true, default: 0})
    cancel: number
}

export const ConcertsOverviewSchema = SchemaFactory.createForClass(ConcertsOverview)