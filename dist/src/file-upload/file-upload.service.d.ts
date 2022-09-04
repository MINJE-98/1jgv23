/// <reference types="node" />
import { imageUpload, users } from '@prisma/client';
import { FileManagerAwsS3Repository } from '@app/library/file-manager/aws-s3/file-manager-aws-s3.repository';
import { PrismaService } from '@app/library/prisma';
import { FileUploadRepository } from './file-upload.repository';
export declare class FileUploadService {
    private readonly fileManager;
    private readonly prismaService;
    private readonly fileUploadRepository;
    constructor(fileManager: FileManagerAwsS3Repository, prismaService: PrismaService, fileUploadRepository: FileUploadRepository);
    private generateFileNameByUserId;
    private getFileExtensionFromMimeType;
    upload({ userId, fileRaw, mimeType, fileSizeBytes, }: {
        userId: users['id'];
        fileRaw: Buffer;
        mimeType: string;
        fileSizeBytes: imageUpload['fileSizeBytes'];
    }): Promise<imageUpload>;
}
