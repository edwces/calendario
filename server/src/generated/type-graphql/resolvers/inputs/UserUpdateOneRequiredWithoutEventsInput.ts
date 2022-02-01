import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutEventsInput } from "../inputs/UserCreateOrConnectWithoutEventsInput";
import { UserCreateWithoutEventsInput } from "../inputs/UserCreateWithoutEventsInput";
import { UserUpdateWithoutEventsInput } from "../inputs/UserUpdateWithoutEventsInput";
import { UserUpsertWithoutEventsInput } from "../inputs/UserUpsertWithoutEventsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutEventsInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutEventsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEventsInput, {
    nullable: true
  })
  create?: UserCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutEventsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutEventsInput | undefined;
}
