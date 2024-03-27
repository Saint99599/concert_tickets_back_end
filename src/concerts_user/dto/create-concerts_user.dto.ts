import { IsString, IsNumber } from "class-validator"

export class CreateConcertsUserDto {
    @IsString()
    readonly name: string

    @IsNumber()
    readonly seat: number
    
    @IsString()
    readonly description: string
}

