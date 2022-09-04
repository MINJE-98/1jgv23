import { users, usersAuth } from '@prisma/client';
import { UsersAuthRepository } from '@api/users/auth/users-auth.repository';
import { JwtTokenService } from '@app/library/jwt/jwt-token.service';
import { PrismaService } from '@app/library/prisma';
export declare class UsersAuthService {
    private readonly usersAuthRepository;
    private readonly prismaService;
    private readonly jwtTokenService;
    constructor(usersAuthRepository: UsersAuthRepository, prismaService: PrismaService, jwtTokenService: JwtTokenService);
    private parseDeviceType;
    createRefreshToken({ id, userAgent, userIp, }: {
        id: users['id'];
        userAgent: string;
        userIp: usersAuth['userIp'];
    }): Promise<string>;
    deleteRefreshTokenHistory(refreshToken: usersAuth['refreshToken']): Promise<number>;
    verifyRefreshTokenAndCreateAccessToken(refreshToken: usersAuth['refreshToken'], userAgent: string): Promise<string>;
}
