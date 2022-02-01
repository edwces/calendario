import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyOwnerInputEnvelope } from "../inputs/EventCreateManyOwnerInputEnvelope";
import { EventCreateOrConnectWithoutOwnerInput } from "../inputs/EventCreateOrConnectWithoutOwnerInput";
import { EventCreateWithoutOwnerInput } from "../inputs/EventCreateWithoutOwnerInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutOwnerInput } from "../inputs/EventUpdateManyWithWhereWithoutOwnerInput";
import { EventUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/EventUpdateWithWhereUniqueWithoutOwnerInput";
import { EventUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/EventUpsertWithWhereUniqueWithoutOwnerInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateManyWithoutOwnerInput", {
  isAbstract: true
})
export class EventUpdateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: EventCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyOwnerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
