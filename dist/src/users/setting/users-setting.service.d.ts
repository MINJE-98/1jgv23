import { users, usersSetting } from '@prisma/client';
import { UsersSettingRepository } from '@api/users/setting/users-setting.repository';
import { UsersRepository } from '@api/users/users.repository';
import { PrismaService } from '@app/library/prisma';
export declare class UsersSettingService {
    private readonly prismaService;
    private readonly usersSettingRepository;
    private readonly usersRepository;
    constructor(prismaService: PrismaService, usersSettingRepository: UsersSettingRepository, usersRepository: UsersRepository);
    upsertSetting({ userId, settingType, content, }: {
        userId: usersSetting['userId'];
        settingType: usersSetting['type'];
        content: usersSetting['content'];
    }): Promise<usersSetting>;
    getWithUserNameProfileAndSetting(userName: users['userName']): Promise<{
        userId: number;
        name: string;
        avatar: string | null;
        createdAt: Date;
        settings: {
            type: import(".prisma/client").settingType;
            content: string | null;
        }[];
    }>;
    getUserProfileAndSetting(userId: usersSetting['userId']): Promise<{
        userId: number;
        name: string;
        avatar: string | null;
        createdAt: Date;
        settings: {
            type: import(".prisma/client").settingType;
            content: string | null;
        }[];
    }>;
}
