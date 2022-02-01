import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEventArgs } from "./args/AggregateEventArgs";
import { Event } from "../../../models/Event";
import { AggregateEvent } from "../../outputs/AggregateEvent";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Event)
export class AggregateEventResolver {
  @TypeGraphQL.Query(_returns => AggregateEvent, {
    nullable: false
  })
  async aggregateEvent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEventArgs): Promise<AggregateEvent> {
    return getPrismaFromContext(ctx).event.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
