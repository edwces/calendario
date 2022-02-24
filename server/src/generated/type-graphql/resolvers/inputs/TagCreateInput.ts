import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedManyWithoutTagInput } from "../inputs/EventCreateNestedManyWithoutTagInput";

@TypeGraphQL.InputType("TagCreateInput", {
  isAbstract: true
})
export class TagCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => EventCreateNestedManyWithoutTagInput, {
    nullable: true
  })
  events?: EventCreateNestedManyWithoutTagInput | undefined;
}
