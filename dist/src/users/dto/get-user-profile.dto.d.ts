import { users, usersSetting } from '@prisma/client';
export declare class GetUserProfileRequestParamDto {
    userName: users['userName'];
}
declare class GetUserProfileSettingItem {
    type: usersSetting['type'];
    content: usersSetting['content'];
}
export declare class GetUserProfileResponseDto {
    name: users['userName'];
    avatar: users['proFileImageURL'];
    createdAt: users['createdAt'];
    settings: GetUserProfileSettingItem[];
    constructor(required: Required<GetUserProfileResponseDto>);
}
export {};
