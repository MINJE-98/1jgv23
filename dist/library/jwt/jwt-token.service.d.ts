import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from '@app/library/jwt/type/token.type';
export declare class JwtTokenService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    generateAccessToken(payload: TokenPayload): string;
    generateRefreshToken(payload: TokenPayload): string;
    decodeAccessToken(accessToken: string): TokenPayload;
    decodeRefreshToken(refreshToken: string): TokenPayload;
}
