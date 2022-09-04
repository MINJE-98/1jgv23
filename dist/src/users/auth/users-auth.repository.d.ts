import { usersAuth } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class UsersAuthRepository {
    createHistory({ prismaConnection, userId, refreshToken, userAgent, userIp, }: {
        prismaConnection: PrismaConnection;
        userId: usersAuth['userId'];
        refreshToken: usersAuth['refreshToken'];
        userAgent: usersAuth['userAgent'];
        userIp: usersAuth['userIp'];
    }): import(".prisma/client").Prisma.Prisma__usersAuthClient<usersAuth>;
    findOneByRefreshToken({ prismaConnection, refreshToken, }: {
        prismaConnection: PrismaConnection;
        refreshToken: usersAuth['refreshToken'];
    }): import(".prisma/client").Prisma.Prisma__usersAuthClient<usersAuth | null>;
    deleteByRefreshToken({ prismaConnection, refreshToken, }: {
        prismaConnection: PrismaConnection;
        refreshToken: usersAuth['refreshToken'];
    }): import(".prisma/client").PrismaPromise<import(".prisma/client").Prisma.BatchPayload>;
}
