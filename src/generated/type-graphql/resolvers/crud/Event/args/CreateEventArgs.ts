import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EventCreateInput } from "../../../inputs/EventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEventArgs {
  @TypeGraphQL.Field(_type => EventCreateInput, {
    nullable: false
  })
  data!: EventCreateInput;
}
