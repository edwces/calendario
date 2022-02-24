import * as TypeGraphQL from "type-graphql";
import { Event } from "../../../models/Event";
import { Tag } from "../../../models/Tag";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Event)
export class EventRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).event.findUnique({
      where: {
        id: event.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async tag(@TypeGraphQL.Root() event: Event, @TypeGraphQL.Ctx() ctx: any): Promise<Tag> {
    return getPrismaFromContext(ctx).event.findUnique({
      where: {
        id: event.id,
      },
    }).tag({});
  }
}
