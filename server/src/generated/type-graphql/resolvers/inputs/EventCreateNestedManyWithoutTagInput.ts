import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyTagInputEnvelope } from "../inputs/EventCreateManyTagInputEnvelope";
import { EventCreateOrConnectWithoutTagInput } from "../inputs/EventCreateOrConnectWithoutTagInput";
import { EventCreateWithoutTagInput } from "../inputs/EventCreateWithoutTagInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class EventCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutTagInput], {
    nullable: true
  })
  create?: EventCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
