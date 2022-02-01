import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyOwnerInput } from "../inputs/EventCreateManyOwnerInput";

@TypeGraphQL.InputType("EventCreateManyOwnerInputEnvelope", {
  isAbstract: true
})
export class EventCreateManyOwnerInputEnvelope {
  @TypeGraphQL.Field(_type => [EventCreateManyOwnerInput], {
    nullable: false
  })
  data!: EventCreateManyOwnerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
