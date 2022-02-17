import { Prisma, PrismaClient } from "@prisma/client";

export interface IContext {
  req: Express.Request;
  res: Express.Response;
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >;
}
