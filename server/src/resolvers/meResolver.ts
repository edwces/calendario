import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "../generated/type-graphql";
import { IContext } from "../types/context";

@Resolver((of) => User)
export class MeResolver {
  @Query((type) => User)
  async me(@Ctx() { prisma, req }: IContext) {
    const userObject = await prisma.user.findFirst({
      where: { id: req.user?.id },
    });
    return userObject;
  }
}
