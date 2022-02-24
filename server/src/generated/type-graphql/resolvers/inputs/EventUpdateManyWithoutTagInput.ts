import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyTagInputEnvelope } from "../inputs/EventCreateManyTagInputEnvelope";
import { EventCreateOrConnectWithoutTagInput } from "../inputs/EventCreateOrConnectWithoutTagInput";
import { EventCreateWithoutTagInput } from "../inputs/EventCreateWithoutTagInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutTagInput } from "../inputs/EventUpdateManyWithWhereWithoutTagInput";
import { EventUpdateWithWhereUniqueWithoutTagInput } from "../inputs/EventUpdateWithWhereUniqueWithoutTagInput";
import { EventUpsertWithWhereUniqueWithoutTagInput } from "../inputs/EventUpsertWithWhereUniqueWithoutTagInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateManyWithoutTagInput", {
  isAbstract: true
})
export class EventUpdateManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutTagInput], {
    nullable: true
  })
  create?: EventCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  set?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  delete?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
