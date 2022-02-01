import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutEventsInput } from "../inputs/UserCreateWithoutEventsInput";
import { UserUpdateWithoutEventsInput } from "../inputs/UserUpdateWithoutEventsInput";

@TypeGraphQL.InputType("UserUpsertWithoutEventsInput", {
  isAbstract: true
})
export class UserUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutEventsInput, {
    nullable: false
  })
  create!: UserCreateWithoutEventsInput;
}
