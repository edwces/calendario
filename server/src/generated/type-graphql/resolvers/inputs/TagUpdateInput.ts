import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateManyWithoutTagInput } from "../inputs/EventUpdateManyWithoutTagInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("TagUpdateInput", {
  isAbstract: true
})
export class TagUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateManyWithoutTagInput, {
    nullable: true
  })
  events?: EventUpdateManyWithoutTagInput | undefined;
}
