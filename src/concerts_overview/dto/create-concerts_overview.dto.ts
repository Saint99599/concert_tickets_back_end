import { IsString, IsNumber } from "class-validator"

export class CreateConcertsOverviewDto {
    @IsNumber()
    readonly totalseats: number

    @IsNumber()
    readonly reserve: number
    
    @IsNumber()
    readonly cancel: number
}
