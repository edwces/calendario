import * as TypeGraphQL from "type-graphql";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
import { UserEventsArgs } from "./args/UserEventsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserEventsArgs): Promise<Event[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).events(args);
  }
}
