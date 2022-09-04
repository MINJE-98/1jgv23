/// <reference types="node" />
export interface FileManagerRepository {
    save: (request: {
        fileName: string;
        fileRaw: Buffer;
        mimeType: string;
    }) => Promise<{
        name: string;
        location: string;
    }>;
    delete: (request: {
        fileName: string;
    }) => Promise<{
        name: string;
    }>;
}
