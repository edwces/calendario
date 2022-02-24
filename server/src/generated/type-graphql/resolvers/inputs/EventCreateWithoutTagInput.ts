import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutEventsInput } from "../inputs/UserCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventCreateWithoutTagInput", {
  isAbstract: true
})
export class EventCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEventsInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutEventsInput;
}
