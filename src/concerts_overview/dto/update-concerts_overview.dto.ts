import { IsString, IsNumber } from "class-validator"
import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertsOverviewDto } from './create-concerts_overview.dto';

export class UpdateConcertsOverviewDto extends PartialType(CreateConcertsOverviewDto) {
    @IsNumber()
    readonly totalseats: number

    @IsNumber()
    readonly reserve: number
    
    @IsNumber()
    readonly cancel: number
}
