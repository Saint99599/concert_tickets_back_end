import { IsString, IsNumber, IsOptional } from "class-validator"

export class CreateConcertsAdminDto {
    @IsString()
    readonly name: string

    @IsNumber()
    readonly seat: number
    
    @IsString()
    readonly description: string
}
