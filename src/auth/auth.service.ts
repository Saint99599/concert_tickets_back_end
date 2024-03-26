import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { AccountsService } from 'src/accounts/accounts.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        private accountsService: AccountsService,
        private jwtService: JwtService,
    ){}

    async validateUser(username: string, password: string){
        const user = await this.accountsService.findByUsername(username)

        if (user && (await bcrypt.compare(password, user.password))){
            const username = user.username
            return username
        }

        return null
    }

    async login(user: any) {
        const payload = {sub: user.userId, username: user.username}
        
        console.log("user data login:");
        console.log(user);
        console.log("payload data:");
        console.log(payload);
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
