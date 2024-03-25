//ประกาศ Schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type AccountsDocument = Accounts & Document

@Schema()
export  class Accounts {
    @Prop({required: true, unique: true })
    username: string
    
    @Prop({required: true})
    password: string
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts)