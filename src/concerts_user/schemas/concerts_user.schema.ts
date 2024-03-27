//ประกาศ Schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ConcertsUserDocument = ConcertsUser & Document

@Schema()
export  class ConcertsUser {
    @Prop({required: true, unique: true })
    name: string
    
    @Prop({required: true})
    seat: number
    
    @Prop({required: true})
    description: string
}

export const ConcertsUserSchema = SchemaFactory.createForClass(ConcertsUser)