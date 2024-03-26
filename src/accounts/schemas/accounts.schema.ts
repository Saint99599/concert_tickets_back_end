//ประกาศ Schema
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as bcrypt from 'bcrypt';

export type AccountsDocument = Accounts & Document

@Schema()
export  class Accounts {
    @Prop({required: true, unique: true })
    username: string
    
    @Prop({required: true})
    password: string

    @Prop({required: true})
    role: string
}

export const AccountsSchema = SchemaFactory.createForClass(Accounts)

AccountsSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});