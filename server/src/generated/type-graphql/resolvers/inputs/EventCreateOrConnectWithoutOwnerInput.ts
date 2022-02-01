import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutOwnerInput } from "../inputs/EventCreateWithoutOwnerInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateOrConnectWithoutOwnerInput", {
  isAbstract: true
})
export class EventCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: EventCreateWithoutOwnerInput;
}
