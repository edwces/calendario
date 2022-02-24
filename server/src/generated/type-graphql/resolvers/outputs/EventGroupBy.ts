import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventAvgAggregate } from "../outputs/EventAvgAggregate";
import { EventCountAggregate } from "../outputs/EventCountAggregate";
import { EventMaxAggregate } from "../outputs/EventMaxAggregate";
import { EventMinAggregate } from "../outputs/EventMinAggregate";
import { EventSumAggregate } from "../outputs/EventSumAggregate";

@TypeGraphQL.ObjectType("EventGroupBy", {
  isAbstract: true
})
export class EventGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  @TypeGraphQL.Field(_type => EventCountAggregate, {
    nullable: true
  })
  _count!: EventCountAggregate | null;

  @TypeGraphQL.Field(_type => EventAvgAggregate, {
    nullable: true
  })
  _avg!: EventAvgAggregate | null;

  @TypeGraphQL.Field(_type => EventSumAggregate, {
    nullable: true
  })
  _sum!: EventSumAggregate | null;

  @TypeGraphQL.Field(_type => EventMinAggregate, {
    nullable: true
  })
  _min!: EventMinAggregate | null;

  @TypeGraphQL.Field(_type => EventMaxAggregate, {
    nullable: true
  })
  _max!: EventMaxAggregate | null;
}
