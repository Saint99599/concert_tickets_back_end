//ประกาศรูปแบบที่จะรับเข้ามา
import { IsString } from "class-validator"

export class LoginAccountDto {
    @IsString()
    readonly username: string
    
    @IsString()
    readonly password: string
}
