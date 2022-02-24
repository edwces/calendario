import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutTagInput } from "../inputs/EventUpdateWithoutTagInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class EventUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutTagInput, {
    nullable: false
  })
  data!: EventUpdateWithoutTagInput;
}
