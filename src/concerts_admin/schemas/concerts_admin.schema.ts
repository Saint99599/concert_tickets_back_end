import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ConcertsAdminDocument = ConcertsAdmin & Document

@Schema()
export  class ConcertsAdmin {
    @Prop({required: true})
    name: string
    
    @Prop({required: true})
    seat: number
    
    @Prop({required: true})
    description: string
}

export const ConcertsAdminSchema = SchemaFactory.createForClass(ConcertsAdmin)