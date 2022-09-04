import { imageUpload } from '@prisma/client';
import { PrismaConnection } from '../../library/prisma/type/prisma.type';
export declare class FileUploadRepository {
    create({ prismaConnection, userId, pathUrl, fileSizeBytes, fileType, }: {
        prismaConnection: PrismaConnection;
        userId: imageUpload['usersID'];
        pathUrl: imageUpload['pathUrl'];
        fileSizeBytes: imageUpload['fileSizeBytes'];
        fileType: imageUpload['fileType'];
    }): import(".prisma/client").Prisma.Prisma__imageUploadClient<imageUpload>;
}
