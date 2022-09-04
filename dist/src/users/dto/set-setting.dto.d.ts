import { usersSetting } from '@prisma/client';
export declare class SetSettingRequestBodyDto {
    content: usersSetting['content'];
    settingType: usersSetting['type'];
}
