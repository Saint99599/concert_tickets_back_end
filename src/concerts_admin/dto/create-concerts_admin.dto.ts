//ประกาศรูปแบบที่จะรับเข้ามา
import { IsString, IsNumber } from "class-validator"

export class CreateConcertsAdminDto {
    @IsString()
    readonly name: string

    @IsNumber()
    readonly seat: number
    
    @IsString()
    readonly description: string
}
