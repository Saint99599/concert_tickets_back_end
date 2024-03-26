import { Injectable } from '@nestjs/common';
import { AccountsService } from 'src/accounts/accounts.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private accountsService: AccountsService){}
    async validateUser(username: string, password: string){
        const user = await this.accountsService.findByUsername(username)

        if (user && (await bcrypt.compare(password, user.password))){
            const username = user.username
            return username
        }

        return null
    }
}
