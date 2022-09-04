/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { FileManagerRepository } from '../interface/file-manager.interface';
export declare class FileManagerAwsS3Repository implements FileManagerRepository {
    private readonly configService;
    private readonly S3_BUCKET_NAME;
    private readonly S3;
    constructor(configService: ConfigService);
    save({ fileName, fileRaw, mimeType, }: {
        fileName: string;
        fileRaw: Buffer;
        mimeType: string;
    }): Promise<{
        name: string;
        location: string;
    }>;
    delete({ fileName }: {
        fileName: string;
    }): Promise<{
        name: string;
    }>;
}
