import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutTagInput } from "../inputs/EventCreateWithoutTagInput";
import { EventUpdateWithoutTagInput } from "../inputs/EventUpdateWithoutTagInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class EventUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutTagInput, {
    nullable: false
  })
  update!: EventUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutTagInput, {
    nullable: false
  })
  create!: EventCreateWithoutTagInput;
}
