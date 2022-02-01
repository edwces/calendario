import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutOwnerInput } from "../inputs/EventCreateWithoutOwnerInput";
import { EventUpdateWithoutOwnerInput } from "../inputs/EventUpdateWithoutOwnerInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class EventUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: EventUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: EventCreateWithoutOwnerInput;
}
