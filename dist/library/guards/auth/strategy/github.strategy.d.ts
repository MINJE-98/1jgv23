import { ConfigService } from '@nestjs/config';
import { Strategy, Profile } from 'passport-github2';
import { UsersService } from '@api/users/users.service';
interface GithubProfile extends Profile {
    nodeId: string;
    photos: [GithubPhoto];
}
interface GithubPhoto {
    value: string;
}
declare const GithubStrategy_base: new (...args: any[]) => Strategy;
export declare class GithubStrategy extends GithubStrategy_base {
    private readonly configService;
    private readonly usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(_: string, __: string, profile: GithubProfile): Promise<import("../../../../src/users/type/users.service.type").UpsertUserAndGetIdResponse>;
}
export {};
