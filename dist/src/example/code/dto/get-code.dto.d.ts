import { users } from '@prisma/client';
export declare class GetCodeRequestDto {
    readonly userId: users['id'];
}
export declare class GetCodeResponseDto {
    readonly message: string;
    constructor(required: Required<GetCodeResponseDto>);
}
