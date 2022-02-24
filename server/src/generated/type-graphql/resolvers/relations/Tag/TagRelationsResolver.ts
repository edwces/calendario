import * as TypeGraphQL from "type-graphql";
import { Event } from "../../../models/Event";
import { Tag } from "../../../models/Tag";
import { TagEventsArgs } from "./args/TagEventsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Event], {
    nullable: false
  })
  async events(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TagEventsArgs): Promise<Event[]> {
    return getPrismaFromContext(ctx).tag.findUnique({
      where: {
        id: tag.id,
      },
    }).events(args);
  }
}
