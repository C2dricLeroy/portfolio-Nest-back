import { PrismaClient } from '@prisma/client';
export declare class TechnologyService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        technology_id: number;
        technology_name: string;
    }[]>;
}
