import { OauthProvider, users } from '@prisma/client';
import { UsersRepository } from '@api/users/users.repository';
import { PrismaService } from '@app/library/prisma';
import { UpsertUserAndGetIdResponse } from '@api/users/type/users.service.type';
export declare class UsersService {
    private readonly prismaService;
    private readonly usersRepository;
    constructor(prismaService: PrismaService, usersRepository: UsersRepository);
    upsertUserAndGetId({ provider, userName, proFileImageURL, providerServiceId, }: {
        providerServiceId: users['providerServiceId'];
        provider: OauthProvider;
        userName: users['userName'];
        proFileImageURL: users['proFileImageURL'];
    }): Promise<UpsertUserAndGetIdResponse>;
}
