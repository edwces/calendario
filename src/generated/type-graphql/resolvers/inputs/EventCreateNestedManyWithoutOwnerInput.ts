import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyOwnerInputEnvelope } from "../inputs/EventCreateManyOwnerInputEnvelope";
import { EventCreateOrConnectWithoutOwnerInput } from "../inputs/EventCreateOrConnectWithoutOwnerInput";
import { EventCreateWithoutOwnerInput } from "../inputs/EventCreateWithoutOwnerInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedManyWithoutOwnerInput", {
  isAbstract: true
})
export class EventCreateNestedManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: EventCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
