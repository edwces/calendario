import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyTagInput } from "../inputs/EventCreateManyTagInput";

@TypeGraphQL.InputType("EventCreateManyTagInputEnvelope", {
  isAbstract: true
})
export class EventCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [EventCreateManyTagInput], {
    nullable: false
  })
  data!: EventCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
