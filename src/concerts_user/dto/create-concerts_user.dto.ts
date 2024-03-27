import { IsString, IsNumber } from "class-validator"

export class CreateConcertsUserDto {
    @IsString()
    readonly username: string

    @IsString()
    readonly productname: string
    
    @IsString()
    readonly action: string
}

