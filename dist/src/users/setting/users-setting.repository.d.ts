import { usersSetting } from '@prisma/client';
import { PrismaConnection } from '@app/library/prisma/type/prisma.type';
export declare class UsersSettingRepository {
    findOneByUserIdAndSettingType({ prismaConnection, userId, settingType, }: {
        prismaConnection: PrismaConnection;
        userId: usersSetting['userId'];
        settingType: usersSetting['type'];
    }): import(".prisma/client").Prisma.Prisma__usersSettingClient<usersSetting | null>;
    upsertBySettingId({ prismaConnection, settingId, userId, settingType, content, }: {
        prismaConnection: PrismaConnection;
        settingId: usersSetting['id'];
        userId: usersSetting['userId'];
        settingType: usersSetting['type'];
        content: usersSetting['content'];
    }): import(".prisma/client").Prisma.Prisma__usersSettingClient<usersSetting>;
    getManyByUserId({ prismaConnection, userId, }: {
        prismaConnection: PrismaConnection;
        userId: usersSetting['userId'];
    }): import(".prisma/client").PrismaPromise<usersSetting[]>;
}
