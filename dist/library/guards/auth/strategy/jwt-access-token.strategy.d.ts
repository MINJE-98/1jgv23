import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { TokenPayload } from '@app/library/jwt/type/token.type';
declare const JwtAccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAccessTokenStrategy extends JwtAccessTokenStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(payload: TokenPayload): Promise<TokenPayload>;
}
export {};
