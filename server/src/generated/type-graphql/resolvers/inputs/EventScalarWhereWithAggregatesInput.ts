import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EventScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EventScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EventScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date?: DateTimeWithAggregatesFilter | undefined;
}
