import { Prisma, PrismaClient } from '@prisma/client';
export declare type PrismaConnection = Omit<PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>;
