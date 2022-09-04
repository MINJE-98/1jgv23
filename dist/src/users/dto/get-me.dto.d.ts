import { users, usersSetting } from '@prisma/client';
declare class GetMeUserSettingItem {
    type: usersSetting['type'];
    content: usersSetting['content'];
}
export declare class GetMeResponseDto {
    userId: users['id'];
    name: users['userName'];
    avatar: users['proFileImageURL'];
    createdAt: users['createdAt'];
    settings: GetMeUserSettingItem[];
    constructor(required: Required<GetMeResponseDto>);
}
export {};
