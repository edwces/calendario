import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutEventsInput } from "../inputs/TagCreateNestedOneWithoutEventsInput";
import { UserCreateNestedOneWithoutEventsInput } from "../inputs/UserCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventCreateInput", {
  isAbstract: true
})
export class EventCreateInput {
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

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutEventsInput, {
    nullable: true
  })
  tag?: TagCreateNestedOneWithoutEventsInput | undefined;
}
