import { UsersSettingService } from '@api/users/setting/users-setting.service';
import { GetMeResponseDto } from '@api/users/dto/get-me.dto';
import { GetUserProfileRequestParamDto, GetUserProfileResponseDto } from '@api/users/dto/get-user-profile.dto';
import { SetSettingRequestBodyDto } from '@api/users/dto/set-setting.dto';
import { TokenPayload } from '@app/library/jwt/type/token.type';
export declare class UsersController {
    private readonly usersSettingService;
    constructor(usersSettingService: UsersSettingService);
    setSetting({ userId }: TokenPayload, setSettingRequestBodyDto: SetSettingRequestBodyDto): Promise<null>;
    getMe({ userId }: TokenPayload): Promise<GetMeResponseDto>;
    getUserProfile({ userName }: GetUserProfileRequestParamDto): Promise<GetUserProfileResponseDto>;
}
