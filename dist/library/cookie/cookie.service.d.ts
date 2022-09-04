import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
interface RefreshTokenCookiePayload {
    refreshToken: string;
}
export declare class CookieService {
    private readonly configService;
    constructor(configService: ConfigService);
    setRefreshTokenCookie({ response, refreshToken, }: {
        response: Response;
        refreshToken: string;
    }): Response<any, Record<string, any>>;
    clearRefreshTokenCookie({ response }: {
        response: Response;
    }): Response<any, Record<string, any>>;
    private refreshCookieOptions;
    isInRefreshTokenCookie(object: any): object is RefreshTokenCookiePayload;
}
export {};
