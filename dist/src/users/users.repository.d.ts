import { OauthProvider, users } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class UsersRepository {
    findIdByProviderServiceId({ prismaConnection, provider, providerServiceId, }: {
        prismaConnection: PrismaConnection;
        provider: OauthProvider;
        providerServiceId: users['providerServiceId'];
    }): import(".prisma/client").Prisma.Prisma__usersClient<{
        id: number;
    } | null>;
    upsertByUserId({ prismaConnection, userId, provider, userName, proFileImageURL, providerServiceId, }: {
        prismaConnection: PrismaConnection;
        userId: users['id'];
        providerServiceId: users['providerServiceId'];
        provider: OauthProvider;
        userName: users['userName'];
        proFileImageURL: users['proFileImageURL'];
    }): import(".prisma/client").Prisma.Prisma__usersClient<{
        id: number;
    }>;
    findOneByName({ prismaConnection, userName, }: {
        prismaConnection: PrismaConnection;
        userName: users['userName'];
    }): import(".prisma/client").Prisma.Prisma__usersClient<users | null>;
    findOneById({ prismaConnection, userId, }: {
        prismaConnection: PrismaConnection;
        userId: users['id'];
    }): import(".prisma/client").Prisma.Prisma__usersClient<users | null>;
}
