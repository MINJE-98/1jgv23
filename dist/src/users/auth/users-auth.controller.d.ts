import { ConfigService } from '@nestjs/config';
import { UsersAuthService } from '@api/users/auth/users-auth.service';
import { CookieService } from '@app/library/cookie/cookie.service';
import { Response, Request } from 'express';
import { GetAccessTokenUsingRefreshTokenResponse } from '@api/users/auth/dto/get-access-token-using-refresh-token.dto';
import { UpsertUserAndGetIdResponse } from '@api/users/type/users.service.type';
export declare class UsersAuthController {
    private readonly usersAuthService;
    private readonly configService;
    private readonly cookieService;
    constructor(usersAuthService: UsersAuthService, configService: ConfigService, cookieService: CookieService);
    githubLogin(): null;
    githubLoginCallback({ user }: {
        user: UpsertUserAndGetIdResponse;
    }, userIp: string, userAgent: string, response: Response): Promise<null>;
    getAccessTokenUsingRefreshToken(request: Request, userAgent: string): Promise<GetAccessTokenUsingRefreshTokenResponse>;
    deleteRefreshToken(request: Request, response: Response): Promise<null>;
}
