import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutEventsInput } from "../inputs/TagCreateWithoutEventsInput";
import { TagUpdateWithoutEventsInput } from "../inputs/TagUpdateWithoutEventsInput";

@TypeGraphQL.InputType("TagUpsertWithoutEventsInput", {
  isAbstract: true
})
export class TagUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: TagUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutEventsInput, {
    nullable: false
  })
  create!: TagCreateWithoutEventsInput;
}
