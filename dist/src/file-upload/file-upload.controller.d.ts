/// <reference types="multer" />
import { FileUploadService } from './file-upload.service';
import { TokenPayload } from '@app/library/jwt/type/token.type';
import { UploadImageResponseDto } from './dto/upload-image.dto';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadImage(file: Express.Multer.File, { userId }: TokenPayload): Promise<UploadImageResponseDto>;
}
