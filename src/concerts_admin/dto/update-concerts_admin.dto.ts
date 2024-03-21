import { IsString, IsNumber, IsOptional } from "class-validator"

export class UpdateConcertsAdminDto {
    @IsString()
    @IsOptional()
    readonly name?: string

    @IsNumber()
    @IsOptional()
    readonly seat?: number

    @IsString()
    @IsOptional()
    readonly description?: string
}
