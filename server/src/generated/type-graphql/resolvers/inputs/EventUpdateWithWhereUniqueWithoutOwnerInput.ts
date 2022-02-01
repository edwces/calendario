import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutOwnerInput } from "../inputs/EventUpdateWithoutOwnerInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true
})
export class EventUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: EventUpdateWithoutOwnerInput;
}
